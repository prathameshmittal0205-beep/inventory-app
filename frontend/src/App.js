import React, { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const handleLogout = () => {
    alert("Logged out!");
  };

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <h1>Dashboard Page</h1>;
      case "categories":
        return <h1>Categories Page</h1>;
      case "products":
        return <h1>Products Page</h1>;
      case "suppliers":
        return <h1>Suppliers Page</h1>;
      case "orders":
        return <h1>Orders Page</h1>;
      case "users":
        return <h1>Users Page</h1>;
      case "profile":
        return <h1>Profile Page</h1>;
      default:
        return <h1>Dashboard Page</h1>;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>IMS Admin</h2>

        <button
          onClick={() => setActivePage("dashboard")}
          className={activePage === "dashboard" ? "active" : ""}
        >
          Dashboard
        </button>

        <button
          onClick={() => setActivePage("categories")}
          className={activePage === "categories" ? "active" : ""}
        >
          Categories
        </button>

        <button
          onClick={() => setActivePage("products")}
          className={activePage === "products" ? "active" : ""}
        >
          Products
        </button>

        <button
          onClick={() => setActivePage("suppliers")}
          className={activePage === "suppliers" ? "active" : ""}
        >
          Suppliers
        </button>

        <button
          onClick={() => setActivePage("orders")}
          className={activePage === "orders" ? "active" : ""}
        >
          Orders
        </button>

        <button
          onClick={() => setActivePage("users")}
          className={activePage === "users" ? "active" : ""}
        >
          Users
        </button>

        <button
          onClick={() => setActivePage("profile")}
          className={activePage === "profile" ? "active" : ""}
        >
          Profile
        </button>

        <div className="sidebar-footer">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">{renderContent()}</div>
    </div>
  );
}

export default App;
