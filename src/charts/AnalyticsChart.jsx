import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Line, ResponsiveContainer,CartesianGrid, PieChart,Pie,Cell, LineChart } from 'recharts';
import { studentData } from "../data/studentData";
import WeeklyProgress from "./WeeklyProgress";
import CourseCompletion from "./CourseCompletion";
import QuizPerformance from "./QuizPerformance";
function AnalyticsChart() {
  const progress=studentData.analytics.progressDistribution;  
  const trend=studentData.analytics.progressTrend;
  return (
    <div className="analytics" >
      <h2>Analytics</h2>
      <div className="charts">
      <div className="pie">
        <h3>Course Completion</h3>
        <CourseCompletion progress={progress}/>
      </div>
      <div className="line">
      <h3>Weekly Progress</h3>
      <WeeklyProgress trend={trend} />
      </div>
      <div className="bar"style={{backgroundColor:"#121624"}}>
      <h3>Quiz Performance</h3>
        <QuizPerformance performance={performance} />
      </div>
      </div>
    </div>
  );
}  

export default AnalyticsChart;
