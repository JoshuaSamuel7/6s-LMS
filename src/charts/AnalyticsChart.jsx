import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Line, ResponsiveContainer,CartesianGrid, PieChart,Pie,Cell, LineChart } from 'recharts';
import { studentData } from "../data/studentData";
function AnalyticsChart() {
  const performance=studentData.analytics.quizPerformance;
  const progress=studentData.analytics.progressDistribution;  
  const trend=studentData.analytics.progressTrend;
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CFE'];
  return (
    <div className="analytics" >
      <h2>Analytics</h2>
      <div className="charts">
      <div className="pie">
        <h3>Course Completion</h3>
      <ResponsiveContainer width="80%" height={300} className={"recharts-pie"}>
        <PieChart>
          <Tooltip/>
          <Pie data={progress} dataKey="completed"  nameKey="course" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
           {progress.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="line">
      <h3>Weekly Progress</h3>
      <ResponsiveContainer width="80%" height={320}>
        <LineChart data={trend}>
          <Tooltip/>
          <XAxis dataKey="week"/>
          <YAxis/>
          <Line dataKey="avgProgress"/>
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className="bar"style={{backgroundColor:"#121624"}}>
      <h3>Quiz Performance</h3>
      <ResponsiveContainer width="80%" height={300}>
        <BarChart data={performance} >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="course" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="avgScore" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      </div>
      </div>
    </div>
  );
}  

export default AnalyticsChart;
