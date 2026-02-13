import React from "react";
import "./App.css";

const Dashboard = () => {
  const stockData = [
    { item: "Laptop", quantity: 20 },
    { item: "Mouse", quantity: 5 },
    { item: "Keyboard", quantity: 0 },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="cards">
        {stockData.map((stock, index) => (
          <div className="card" key={index}>
            <h3>{stock.item}</h3>
            <p>Quantity: {stock.quantity}</p>
            <button
              className={
                stock.quantity === 0
                  ? "btn-red"
                  : stock.quantity < 10
                  ? "btn-yellow"
                  : "btn-green"
              }
            >
              {stock.quantity === 0
                ? "Out of Stock"
                : stock.quantity < 10
                ? "Low Stock"
                : "In Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
