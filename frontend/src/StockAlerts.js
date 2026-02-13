import React from "react";
import "./App.css";

const StockAlerts = () => {
  const alerts = [
    { item: "Mouse", quantity: 5 },
    { item: "Keyboard", quantity: 0 },
  ];

  return (
    <div>
      <h1>Stock Alerts</h1>
      <ul className="alerts">
        {alerts.map((alert, index) => (
          <li
            key={index}
            className={alert.quantity === 0 ? "alert-red" : "alert-yellow"}
          >
            {alert.item} - Quantity: {alert.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockAlerts;
