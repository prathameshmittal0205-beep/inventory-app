import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.length === 0 ? <p>No users found.</p> :
        <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>}
    </div>
  );
}

export default Users;
