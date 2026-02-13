import React, { useEffect, useState } from "react";
import axios from "axios";

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/suppliers")
      .then(res => setSuppliers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Suppliers</h2>
      {suppliers.length === 0 ? <p>No suppliers found.</p> :
        <ul>{suppliers.map(s => <li key={s.id}>{s.name}</li>)}</ul>}
    </div>
  );
}

export default Suppliers;
