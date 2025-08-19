import React from "react";
import {ResponsiveContainer,Line,LineChart,Tooltip,XAxis,YAxis} from 'recharts'
import { studentData } from "../data/studentData";
export default function WeeklyProgress({chat}) {
      const trend=studentData.analytics.progressTrend;
  return (
    <ResponsiveContainer width="80%" height={320} className={chat?"perf":""}>
      <LineChart data={trend}>
        <Tooltip />
        <XAxis dataKey="week" />
        <YAxis />
        <Line dataKey="avgProgress" />
      </LineChart>
    </ResponsiveContainer>
  );
}
