import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#222", color: "#fff", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", padding: "20px 0" }}>Inventory</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ padding: "10px" }}>
          <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>Dashboard</Link>
        </li>
        <li style={{ padding: "10px" }}>
          <Link to="/suppliers" style={{ color: "#fff", textDecoration: "none" }}>Suppliers</Link>
        </li>
        <li style={{ padding: "10px" }}>
          <Link to="/users" style={{ color: "#fff", textDecoration: "none" }}>Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
