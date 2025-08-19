import React from "react";

const StatCard = ({ title, value, bg }) => (
  <div className="stat-card" style={{ background: bg }}>
    <h3>{title}</h3>
    <p className="metric">{value}</p>
  </div>
);

export default StatCard;
