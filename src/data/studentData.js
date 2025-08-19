export const studentData = {
  courses: [
    {
      name: "React Basics",
      progress: { completed: 4, total: 5 },
      chart: [
        { week: "W1", progress: 20 },
        { week: "W2", progress: 40 },
        { week: "W3", progress: 60 },
        { week: "W4", progress: 80 },
        { week: "W5", progress: 100 }
      ],
      table: [
        { quiz: "Week 1 Quiz", score: "80%", attempts: 1 },
        { quiz: "Week 2 Quiz", score: "90%", attempts: 1 },
        { quiz: "Week 3 Quiz", score: "85%", attempts: 2 },
        { quiz: "Week 4 Quiz", score: "70%", attempts: 1 },
        { quiz: "Final Quiz", score: "95%", attempts: 1 }
      ]
    },
    {
      name: "JavaScript Advanced",
      progress: { completed: 2, total: 5 },
      chart: [
        { week: "W1", progress: 10 },
        { week: "W2", progress: 20 },
        { week: "W3", progress: 40 },
        { week: "W4", progress: 50 },
        { week: "W5", progress: 60 }
      ],
      table: [
        { quiz: "Week 1 Quiz", score: "70%", attempts: 1 },
        { quiz: "Week 2 Quiz", score: "75%", attempts: 2 },
        { quiz: "Week 3 Quiz", score: "60%", attempts: 1 },
        { quiz: "Week 4 Quiz", score: "80%", attempts: 1 },
        { quiz: "Final Quiz", score: "85%", attempts: 1 }
      ]
    },
    {
      name: "Node.js",
      progress: { completed: 1, total: 5 },
      chart: [
        { week: "W1", progress: 20 },
        { week: "W2", progress: 40 },
        { week: "W3", progress: 60 },
        { week: "W4", progress: 80 },
        { week: "W5", progress: 100 }
      ],
      table: [
        { quiz: "Week 1 Quiz", score: "60%", attempts: 1 },
        { quiz: "Week 2 Quiz", score: "65%", attempts: 1 }
      ]
    },
    {
      name: "CSS Mastery",
      progress: { completed: 3, total: 6 },
      chart: [
        { week: "W1", progress: 15 },
        { week: "W2", progress: 30 },
        { week: "W3", progress: 50 },
        { week: "W4", progress: 55 },
        { week: "W5", progress: 70 },
        { week: "W6", progress: 80 }
      ],
      table: [
        { quiz: "Week 1 Quiz", score: "85%", attempts: 1 },
        { quiz: "Week 2 Quiz", score: "80%", attempts: 1 },
        { quiz: "Week 3 Quiz", score: "90%", attempts: 1 }
      ]
    },
    {
      name: "Data Structures",
      progress: { completed: 5, total: 8 },
      chart: [
        { week: "W1", progress: 10 },
        { week: "W2", progress: 25 },
        { week: "W3", progress: 35 },
        { week: "W4", progress: 50 },
        { week: "W5", progress: 60 },
        { week: "W6", progress: 70 },
        { week: "W7", progress: 75 },
        { week: "W8", progress: 90 }
      ],
      table: [
        { quiz: "Week 1 Quiz", score: "75%", attempts: 2 },
        { quiz: "Week 2 Quiz", score: "80%", attempts: 1 },
        { quiz: "Week 3 Quiz", score: "65%", attempts: 1 },
        { quiz: "Week 4 Quiz", score: "85%", attempts: 2 }
      ]
    }
  ],
  achievements: [
    { title: "Consistent Learner", date: "2025-07-20" },
    { title: "Top Quiz Score", date: "2025-08-01" },
    { title: "CSS Pro", date: "2025-08-10" },
    { title: "Algorithm Starter", date: "2025-08-07" }
  ],
  upcoming: [
    { task: "Week 5 Quiz", due: "2025-08-23" },
    { task: "Project Submission", due: "2025-08-25" },
    { task: "CSS Capstone Project", due: "2025-08-22" },
    { task: "Data Structures Final Quiz", due: "2025-08-29" }
  ],
   analytics: {
    progressDistribution: [
      { course: "React Basics", completed: 80 },
      { course: "JavaScript Adv.", completed: 40 },
      { course: "Node.js", completed: 20 },
      { course: "CSS Mastery", completed: 50 },
      { course: "Data Structures", completed: 62.5 }
    ],
    quizPerformance: [
      { course: "React Basics", avgScore: 84 },
      { course: "JavaScript Adv.", avgScore: 74 },
      { course: "Node.js", avgScore: 62.5 },
      { course: "CSS Mastery", avgScore: 85 },
      { course: "Data Structures", avgScore: 76.25 }
    ],
    progressTrend: [
    { week: "W1", avgProgress: 16.2 },
    { week: "W2", avgProgress: 21 },
    { week: "W3", avgProgress: 46.5 },
    { week: "W4", avgProgress: 53 },
    { week: "W5", avgProgress: 68.3 },
    { week: "W6", avgProgress: 85 },     
    { week: "W7", avgProgress: 88 },
    { week: "W8", avgProgress: 93 }
  ]
    
  }
};
