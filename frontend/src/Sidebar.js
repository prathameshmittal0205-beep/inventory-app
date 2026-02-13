import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";

function Sidebar({ user, setUser }) {
  const location = useLocation();
  const activeClass = (path) =>
    location.pathname === path ? "sidebar-item active" : "sidebar-item";

  const handleLogout = () => setUser(null);

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Inventory App</h2>
      <p className="sidebar-user">Hello, {user.name}</p>
      <Link className={activeClass("/")} to="/">Dashboard</Link>
      <Link className={activeClass("/suppliers")} to="/suppliers">Suppliers</Link>
      <Link className={activeClass("/users")} to="/users">Users</Link>
      <Link className={activeClass("/stock-alerts")} to="/stock-alerts">Stock Alerts</Link>
      <Link className={activeClass("/reports")} to="/reports">Reports</Link>
      <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Sidebar;
