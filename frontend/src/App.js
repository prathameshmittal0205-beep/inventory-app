import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Suppliers from "./Suppliers";
import Users from "./Users";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/*"
          element={
            <div style={{ display: "flex" }}>
              <Sidebar />
              <div style={{ flex: 1, padding: "20px" }}>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="suppliers" element={<Suppliers />} />
                  <Route path="users" element={<Users />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
