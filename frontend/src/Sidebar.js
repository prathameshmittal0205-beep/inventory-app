import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Inventory App</h2>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/suppliers">Suppliers</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
