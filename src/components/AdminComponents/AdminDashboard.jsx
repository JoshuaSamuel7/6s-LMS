import React from "react";
import { adminData } from "../../data/adminData.js";
import StatCard from "./StatCard";
import ChartCard from "./ChartCard.jsx";
import LineChartWrapper from "./LineChartWrapper";
import PieChartWrapper from "./PieChartWrapper";
import BarChartWrapper from "./BarChartWrapper";
import DataTable from "./DataTable";
import SystemAlerts from "./SystemAlerts";
import "./admindashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="header">Admin Dashboard</h1>
      <div className="cards-row">
        <StatCard title="Total Users" value={adminData.orgUsageStats.totalUsers} bg="#1e1e2f" />
        <StatCard title="Active Users (7 days)" value={adminData.orgUsageStats.activeUsersLast7Days} bg="#2f243b" />
        <StatCard title="New Users This Month" value={adminData.orgUsageStats.newUsersThisMonth} bg="#1f314f" />
        <StatCard title="Avg. Session Duration" value={`${adminData.orgUsageStats.averageSessionDurationMinutes} mins`} bg="#30454c" />
      </div>
      <div className="charts-row">
        <ChartCard title="Daily Active Users">
          <LineChartWrapper data={adminData.orgUsageStats.dailyActiveUsers} xKey="day" yKey="count" />
        </ChartCard>

        <ChartCard title="User Distribution by Department">
          <PieChartWrapper data={adminData.orgUsageStats.usageByDepartment} dataKey="users" nameKey="department" />
        </ChartCard>
      </div>

      <div className="charts-row">
        <ChartCard title="Active Users by Role">
          <PieChartWrapper data={adminData.activeUsersByRole} dataKey="count" nameKey="role" />
        </ChartCard>

        <ChartCard title="Course Completion Rates (%)">
          <BarChartWrapper data={adminData.courseCompletionRates} dataKey="completionPercentage" xKey="course" />
        </ChartCard>
      </div>
      <ChartCard title="Quiz Analytics (Average Scores & Attempts)" isTable>
        {adminData.quizAnalytics.map(({ course, quizzes }) => (
          <DataTable 
            key={course} 
            title={course} 
            columns={["Quiz", "Average Score (%)", "Average Attempts"]}
            rows={quizzes.map(q => [q.quizName, q.averageScore, q.attemptsAvg.toFixed(2)])}
          />
        ))}
      </ChartCard>

      <ChartCard title="Monthly Active Users Trend">
        <LineChartWrapper data={adminData.monthlyActiveUsersTrend} xKey="month" yKey="activeUsers" />
      </ChartCard>

      <ChartCard title="Department Course Engagements" isTable>
        {adminData.departmentCourseEngagement.map(({ department, courses }) => (
          <DataTable 
            key={department} 
            title={department} 
            columns={["Course", "Enrolled", "Completion Rate (%)"]}
            rows={courses.map(c => [c.name, c.enrolled, c.completion])}
          />
        ))}
      </ChartCard>
      <SystemAlerts alerts={adminData.systemAlerts} />
      
    </div>
  );
};

export default AdminDashboard;
