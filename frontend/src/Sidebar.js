import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";

function Sidebar({ user, setUser }) {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h3>Welcome, {user.name}</h3>
      <nav>
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Dashboard</Link>
        <Link className={location.pathname === "/suppliers" ? "active" : ""} to="/suppliers">Suppliers</Link>
        <Link className={location.pathname === "/users" ? "active" : ""} to="/users">Users</Link>
        <Link className={location.pathname === "/stock-alerts" ? "active" : ""} to="/stock-alerts">Stock Alerts</Link>
        <Link className={location.pathname === "/reports" ? "active" : ""} to="/reports">Reports</Link>
      </nav>
      <button className="btn btn-logout" onClick={setUser}>Logout</button>
    </div>
  );
}

export default Sidebar;
