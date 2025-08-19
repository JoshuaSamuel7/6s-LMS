import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const LineChartWrapper = ({ data, xKey, yKey }) => (
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#2a2a44" />
      <XAxis dataKey={xKey} stroke="#ccc" />
      <YAxis stroke="#ccc" />
      <Tooltip contentStyle={{ backgroundColor: "#222244", borderRadius: 6 }} itemStyle={{ color: "#fff" }} />
      <Line type="monotone" dataKey={yKey} stroke="#00C49F" strokeWidth={3} dot={{ r: 5 }} />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartWrapper;
