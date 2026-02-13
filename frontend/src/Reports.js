import React from "react";

function Reports() {
  return (
    <div className="page">
      <h1>Reports</h1>
      <p>Generate inventory, supplier, and user reports here.</p>
      <div className="report-cards">
        <div className="card">Monthly Stock Report</div>
        <div className="card">Supplier Performance</div>
        <div className="card">User Activity</div>
      </div>
    </div>
  );
}

export default Reports;
