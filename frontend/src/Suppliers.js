import React from "react";
import "./App.css";

const Suppliers = () => {
  const suppliers = [
    { name: "Tech Supplies Inc.", contact: "123-456-7890" },
    { name: "Office Goods Ltd.", contact: "987-654-3210" },
  ];

  return (
    <div>
      <h1>Suppliers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((sup, index) => (
            <tr key={index}>
              <td>{sup.name}</td>
              <td>{sup.contact}</td>
              <td>
                <button className="btn-yellow">Edit</button>
                <button className="btn-red">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;
