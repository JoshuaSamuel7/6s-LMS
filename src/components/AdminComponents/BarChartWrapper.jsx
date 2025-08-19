import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const BarChartWrapper = ({ data, dataKey, xKey }) => (
  <ResponsiveContainer width="100%" height={250} className={"recharts-bar"}>
    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#2a2a44" />
      <XAxis dataKey={xKey} stroke="#ccc" />
      <YAxis stroke="#ccc" domain={[0, 100]} />
      <Tooltip contentStyle={{ backgroundColor: "#222244", borderRadius: 6 }} itemStyle={{ color: "#fff" }} />
      <Bar dataKey={dataKey} fill="#00C49F" barSize={24} />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartWrapper;
