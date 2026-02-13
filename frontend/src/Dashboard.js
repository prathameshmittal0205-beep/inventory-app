import React from "react";

function Dashboard() {
  return (
    <div className="page">
      <h1>Welcome to Inventory Dashboard</h1>
      <p>Quick summary of stock, suppliers, and users.</p>
      <div className="summary-cards">
        <div className="card">Total Suppliers: 10</div>
        <div className="card">Total Users: 5</div>
        <div className="card">Items in Stock: 150</div>
        <div className="card">Low Stock Items: 8</div>
      </div>
    </div>
  );
}

export default Dashboard;
