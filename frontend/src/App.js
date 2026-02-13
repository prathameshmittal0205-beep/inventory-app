import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Suppliers from "./Suppliers";
import Users from "./Users";
import StockAlerts from "./StockAlerts";
import Reports from "./Reports";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/users" element={<Users />} />
            <Route path="/stock-alerts" element={<StockAlerts />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
