import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "Users", path: "/users" },
    { name: "Stock Alerts", path: "/stock-alerts" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Inventory App</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
