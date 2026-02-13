const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/inventory")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// ================== SCHEMAS ==================

const ItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  category: String,
  location: String,
});

const OrderSchema = new mongoose.Schema({
  customerName: String,
  address: String,
  productName: String,
  category: String,
  quantity: Number,
  totalPrice: Number,
  orderDate: { type: Date, default: Date.now },
});

const CategorySchema = new mongoose.Schema({
  name: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // demo only (NOT hashed)
  name: String,
  email: String,
  address: String,
});

// ================== MODELS ==================

const Item = mongoose.model("Item", ItemSchema);
const Order = mongoose.model("Order", OrderSchema);
const Category = mongoose.model("Category", CategorySchema);
const User = mongoose.model("User", UserSchema);

// ================== AUTH (DEMO) ==================

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (!user) return res.status(401).json({ message: "Invalid login" });

  res.json(user);
});

// Create default admin if not exists
app.get("/init-admin", async (req, res) => {
  const exists = await User.findOne({ username: "admin" });
  if (!exists) {
    await User.create({
      username: "admin",
      password: "admin",
      name: "Admin",
      email: "admin@ims.com",
      address: "VIT Chennai",
    });
  }
  res.json({ message: "Admin ready (admin/admin)" });
});

// ================== ITEMS ==================

app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/items", async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

// ================== CATEGORIES ==================

app.get("/categories", async (req, res) => {
  const cats = await Category.find();
  res.json(cats);
});

app.post("/categories", async (req, res) => {
  const cat = new Category(req.body);
  await cat.save();
  res.json(cat);
});

// ================== ORDERS ==================

app.get("/orders", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

app.post("/orders", async (req, res) => {
  const order = new Order(req.body);
  await order.save();

  // reduce stock
  const item = await Item.findOne({ name: order.productName });
  if (item) {
    item.quantity -= order.quantity;
    await item.save();
  }

  res.json(order);
});

// ================== DASHBOARD SUMMARY ==================

app.get("/summary", async (req, res) => {
  const items = await Item.find();
  const orders = await Order.find();

  const totalProducts = items.length;
  const totalStock = items.reduce((s, i) => s + i.quantity, 0);
  const outOfStock = items.filter((i) => i.quantity === 0);
  const lowStock = items.filter((i) => i.quantity < 5);

  const revenue = orders.reduce((s, o) => s + o.totalPrice, 0);

  const salesMap = {};
  orders.forEach((o) => {
    salesMap[o.productName] =
      (salesMap[o.productName] || 0) + o.quantity;
  });

  let highestSaleProduct = null;
  let max = 0;
  for (let p in salesMap) {
    if (salesMap[p] > max) {
      max = salesMap[p];
      highestSaleProduct = p;
    }
  }

  res.json({
    totalProducts,
    totalStock,
    revenue,
    outOfStock,
    lowStock,
    highestSaleProduct,
  });
});

// ================== SERVER ==================

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
