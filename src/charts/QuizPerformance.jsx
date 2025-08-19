import React from "react";
import {ResponsiveContainer,Bar,BarChart,XAxis,YAxis,Tooltip,CartesianGrid} from 'recharts'
import { studentData } from "../data/studentData";
export default function QuizPerformance({chat}) {
      const performance=studentData.analytics.quizPerformance;
  return (
    <ResponsiveContainer width="100%" height={300} className={chat?"perf":""}>
      <BarChart data={performance}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="course" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Bar dataKey="avgScore" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
