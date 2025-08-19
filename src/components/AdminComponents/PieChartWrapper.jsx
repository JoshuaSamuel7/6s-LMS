import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042", "#AF19FF", "#FF4560", "#775DD0"];

const PieChartWrapper = ({ data, dataKey, nameKey }) => (
  <ResponsiveContainer width="100%" height={350} className="recharts-pie">
    <PieChart>
      <Pie data={data} dataKey={dataKey} nameKey={nameKey} outerRadius={90}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
        {data.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
      </Pie>
      <Tooltip contentStyle={{ backgroundColor: "#222244" }} itemStyle={{ color: "#fff" }} />
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  </ResponsiveContainer>
);

export default PieChartWrapper;
