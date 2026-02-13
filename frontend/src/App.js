import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);                                   //Login System
  const [activePage, setActivePage] = useState("dashboard");                             //State Variable

  const categories = ["Electronics", "Clothing", "Groceries", "Stationery"];

  const [products] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 60000, stock: 5, sold: 20 },
    { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 0, sold: 50 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 1200, stock: 12, sold: 35 },
    { id: 4, name: "Notebook", category: "Stationery", price: 60, stock: 3, sold: 80 },
    { id: 5, name: "Rice Bag", category: "Groceries", price: 1500, stock: 1, sold: 40 }
  ]);

  const [orders] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      address: "Chennai",
      product: "Laptop",
      category: "Electronics",
      quantity: 1,
      total: 60000,
      date: "2026-02-12"
    },
    {
      id: 2,
      name: "Anita Singh",
      address: "Bangalore",
      product: "Notebook",
      category: "Stationery",
      quantity: 10,
      total: 600,
      date: "2026-02-12"
    }
  ]);

  // Dashboard logic section
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const ordersToday = orders.length;
  const revenue = orders.reduce((sum, o) => sum + o.total, 0);

  const outOfStock = products.filter(p => p.stock === 0);
  const lowStock = products.filter(p => p.stock > 0 && p.stock <= 3);

  const highestSaleProduct = products.reduce(
    (max, p) => (p.sold > max.sold ? p : max),
    products[0]
  );

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActivePage("dashboard");
  };

  // ================= LOGIN =================
  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>Inventory System Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="admin@inventory.com" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="admin123" required />
            </div>
            <button className="btn" type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  // ================= MAIN UI =================
  return (
    <div className="app-container">
      
      {/* SIDEBAR */}                          
      <div className="sidebar">
        <h2>IMS Admin</h2>

        <a onClick={() => setActivePage("dashboard")} className={activePage==="dashboard"?"active":""}>Dashboard</a> 
        <a onClick={() => setActivePage("categories")} className={activePage==="categories"?"active":""}>Categories</a>
        <a onClick={() => setActivePage("products")} className={activePage==="products"?"active":""}>Products</a>
        <a onClick={() => setActivePage("suppliers")} className={activePage==="suppliers"?"active":""}>Suppliers</a>
        <a onClick={() => setActivePage("orders")} className={activePage==="orders"?"active":""}>Orders</a>
        <a onClick={() => setActivePage("users")} className={activePage==="users"?"active":""}>Users</a>
        <a onClick={() => setActivePage("profile")} className={activePage==="profile"?"active":""}>Profile</a>

        <div className="sidebar-footer">
          <a onClick={handleLogout}>Logout</a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="topbar">
          <h1>{activePage.toUpperCase()}</h1>
          <div className="user-info">Admin</div>
        </div>

        {/* DASHBOARD */}
        {activePage === "dashboard" && (
          <>
            <div className="dashboard-cards">
              <div className="card"><h3>Total Products</h3><p>{totalProducts}</p></div>
              <div className="card"><h3>Total Stock</h3><p>{totalStock}</p></div>
              <div className="card"><h3>Orders Today</h3><p>{ordersToday}</p></div>
              <div className="card"><h3>Revenue</h3><p>₹{revenue}</p></div>
            </div>

            <div className="table-container">
              <h3>Out of Stock Products</h3>
              <table>
                <thead><tr><th>Name</th><th>Category</th></tr></thead>
                <tbody>
                  {outOfStock.map(p => (
                    <tr key={p.id} className="stock-out">
                      <td>{p.name}</td><td>{p.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <br />

            <div className="table-container">
              <h3>Low Stock Products</h3>
              <table>
                <thead><tr><th>Name</th><th>Category</th><th>Units Left</th></tr></thead>
                <tbody>
                  {lowStock.map(p => (
                    <tr key={p.id} className="stock-low">
                      <td>{p.name}</td><td>{p.category}</td><td>{p.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <br />

            <div className="card">
              <h3>Highest Sale Product</h3>
              <p>{highestSaleProduct.name} ({highestSaleProduct.category})</p>
              <small>Total Units Sold: {highestSaleProduct.sold}</small>
            </div>
          </>
        )}

        {/* CATEGORIES */}
        {activePage === "categories" && (
          <div className="table-container">
            <h3>Categories</h3>
            <table>
              <thead><tr><th>#</th><th>Category Name</th></tr></thead>
              <tbody>
                {categories.map((c, i) => (
                  <tr key={i}><td>{i+1}</td><td>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PRODUCTS */}
        {activePage === "products" && (
          <div className="table-container">
            <h3>Products</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th><th>Name</th><th>Category</th>
                  <th>Price</th><th>Stock</th><th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr 
                    key={p.id}
                    className={
                      p.stock === 0 ? "stock-out" :
                      p.stock <= 3 ? "stock-low" : ""
                    }
                  >
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.category}</td>
                    <td>₹{p.price}</td>
                    <td>{p.stock}</td>
                    <td>
                      <button className="btn btn-edit">Edit</button>{" "}
                      <button className="btn btn-delete">Delete</button>{" "}
                      <button className="btn">Order</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ORDERS */}
        {activePage === "orders" && (
          <div className="table-container">
            <h3>Orders</h3>
            <table>
              <thead>
                <tr>
                  <th>S No</th><th>Name</th><th>Address</th>
                  <th>Product</th><th>Category</th>
                  <th>Qty</th><th>Total</th><th>Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o, i) => (
                  <tr key={o.id}>
                    <td>{i+1}</td>
                    <td>{o.name}</td>
                    <td>{o.address}</td>
                    <td>{o.product}</td>
                    <td>{o.category}</td>
                    <td>{o.quantity}</td>
                    <td>₹{o.total}</td>
                    <td>{o.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PROFILE */}
        {activePage === "profile" && (
          <div className="form-card">
            <h2>User Profile</h2>
            <div className="form-group"><label>Name</label><input value="Admin User" readOnly /></div>
            <div className="form-group"><label>Email</label><input value="admin@inventory.com" readOnly /></div>
            <div className="form-group"><label>Address</label><input value="VIT Chennai" readOnly /></div>
            <button className="btn btn-edit">Edit Profile</button>
          </div>
        )}

        {activePage === "suppliers" && <div className="card">Suppliers Module (Demo)</div>}
        {activePage === "users" && <div className="card">Users Management (Demo)</div>}
      </div>
    </div>
  );
}

export default App;
