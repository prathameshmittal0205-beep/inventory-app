import React from "react";
import "./App.css";

const Users = () => {
  const users = [
    { name: "Alice", role: "Admin" },
    { name: "Bob", role: "Staff" },
  ];

  return (
    <div>
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.role}</td>
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

export default Users;
