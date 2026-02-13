import React from "react";

const stockItems = [
  { id: 1, item: "Laptop", stock: 0 },
  { id: 2, item: "Mouse", stock: 2 },
  { id: 3, item: "Keyboard", stock: 10 },
];

function StockAlerts() {
  return (
    <div className="page">
      <h1>Stock Alerts</h1>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {stockItems.map((i) => (
            <tr key={i.id}>
              <td>{i.item}</td>
              <td className={i.stock === 0 ? "stock-zero" : i.stock < 5 ? "stock-low" : "stock-ok"}>
                {i.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockAlerts;
