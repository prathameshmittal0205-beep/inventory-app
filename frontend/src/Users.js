import React from "react";

const mockUsers = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "Manager" },
  { id: 3, name: "Charlie", role: "Staff" },
];

function Users() {
  return (
    <div className="page">
      <h1>Users</h1>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
