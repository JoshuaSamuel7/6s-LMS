export const adminData = {
  orgUsageStats: {
    totalUsers: 1250,
    activeUsersLast7Days: 430,
    newUsersThisMonth: 120,
    averageSessionDurationMinutes: 45,
    dailyActiveUsers: [
      { day: "Mon", count: 380 },
      { day: "Tue", count: 420 },
      { day: "Wed", count: 410 },
      { day: "Thu", count: 450 },
      { day: "Fri", count: 460 },
      { day: "Sat", count: 300 },
      { day: "Sun", count: 320 }
    ],
    usageByDepartment: [
      { department: "Engineering", users: 500 },
      { department: "Marketing", users: 220 },
      { department: "Sales", users: 180 },
      { department: "HR", users: 150 },
      { department: "Customer Support", users: 200 }
    ]
  },
  activeUsersByRole: [
    { role: "Admin", count: 30 },
    { role: "Instructor", count: 120 },
    { role: "Student", count: 1100 }
  ],
  courseCompletionRates: [
    { course: "React Basics", completionPercentage: 78 },
    { course: "JavaScript Adv.", completionPercentage: 55 },
    { course: "Node.js Fundamentals", completionPercentage: 40 },
    { course: "CSS Mastery", completionPercentage: 62 },
    { course: "Data Structures", completionPercentage: 70 },
    { course: "Project Management", completionPercentage: 65 },
    { course: "Soft Skills", completionPercentage: 80 }
  ],
  quizAnalytics: [
    {
      course: "React Basics",
      quizzes: [
        { quizName: "Week 1", averageScore: 78, attemptsAvg: 1.2 },
        { quizName: "Week 2", averageScore: 83, attemptsAvg: 1.3 },
        { quizName: "Final", averageScore: 88, attemptsAvg: 1.1 }
      ]
    },
    {
      course: "JavaScript Advanced",
      quizzes: [
        { quizName: "Week 1", averageScore: 65, attemptsAvg: 1.5 },
        { quizName: "Week 2", averageScore: 70, attemptsAvg: 1.4 },
        { quizName: "Final", averageScore: 72, attemptsAvg: 1.6 }
      ]
    }
  ],
  monthlyActiveUsersTrend: [
    { month: "Jan", activeUsers: 300 },
    { month: "Feb", activeUsers: 350 },
    { month: "Mar", activeUsers: 450 },
    { month: "Apr", activeUsers: 400 },
    { month: "May", activeUsers: 480 },
    { month: "Jun", activeUsers: 500 },
    { month: "Jul", activeUsers: 550 },
    { month: "Aug", activeUsers: 600 }
  ],
  departmentCourseEngagement: [
    {
      department: "Engineering",
      courses: [
        { name: "React Basics", enrolled: 300, completion: 80 },
        { name: "Node.js Fundamentals", enrolled: 250, completion: 45 }
      ]
    },
    {
      department: "Marketing",
      courses: [
        { name: "Soft Skills", enrolled: 180, completion: 85 },
        { name: "Project Management", enrolled: 150, completion: 70 }
      ]
    }
  ],
  systemAlerts: [
    { id: 1, message: "Server maintenance scheduled for 2025-08-20", severity: "info" },
    { id: 2, message: "New course 'Advanced React' launching soon", severity: "info" },
    { id: 3, message: "Quiz submission delay reported on 2025-08-15", severity: "warning" }
  ]
};
