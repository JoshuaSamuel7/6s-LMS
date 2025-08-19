import React from "react";

const ChartCard = ({ title, children, isTable }) => (
  <div className={`chart-card ${isTable ? "table-card" : ""}`}>
    <h3>{title}</h3>
    {children}
  </div>
);

export default ChartCard;
