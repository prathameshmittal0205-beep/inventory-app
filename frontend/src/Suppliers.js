import React, { useState, useEffect } from "react";
import "./App.css";

const mockSuppliers = [
  { id: 1, name: "ABC Supplies", email: "abc@example.com", stock: 50, lastOrder: "2026-02-10" },
  { id: 2, name: "XYZ Traders", email: "xyz@example.com", stock: 0, lastOrder: "2026-02-08" },
  { id: 3, name: "LMN Corp", email: "lmn@example.com", stock: 5, lastOrder: "2026-02-12" },
];

function Suppliers() {
  const [suppliers, setSuppliers] = useState(
    JSON.parse(localStorage.getItem("suppliers")) || mockSuppliers
  );

  useEffect(() => {
    localStorage.setItem("suppliers", JSON.stringify(suppliers));
  }, [suppliers]);

  const handleDelete = (id) => {
    setSuppliers(suppliers.filter((s) => s.id !== id));
  };

  const handleOrder = (id) => {
    const updated = suppliers.map((s) =>
      s.id === id ? { ...s, stock: s.stock + 10, lastOrder: new Date().toISOString().split("T")[0] } : s
    );
    setSuppliers(updated);
  };

  const getStockClass = (stock) => {
    if (stock === 0) return "stock-zero";
    if (stock < 10) return "stock-low";
    return "stock-ok";
  };

  return (
    <div>
      <h2>Suppliers</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Stock</th>
            <th>Last Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td className={getStockClass(s.stock)}>{s.stock}</td>
              <td>{s.lastOrder}</td>
              <td>
                <button className="btn btn-order" onClick={() => handleOrder(s.id)}>Order</button>
                <button className="btn btn-edit" onClick={() => alert("Edit feature coming soon!")}>Edit</button>
                <button className="btn btn-delete" onClick={() => handleDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Suppliers;
