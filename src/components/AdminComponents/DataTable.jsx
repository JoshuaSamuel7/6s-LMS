import React from "react";

const DataTable = ({ title, columns, rows }) => (
  <div style={{ marginBottom: 24 }}>
    <h4 style={{ color: "#00C49F" }}>{title}</h4>
    <table className="data-table">
      <thead>
        <tr>{columns.map((c, i) => <th key={i}>{c}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>{row.map((cell, j) => <td style={{textAlign:"center"}} key={j}>{cell}</td>)}</tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;
