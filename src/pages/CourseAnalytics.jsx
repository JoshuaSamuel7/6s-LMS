import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Card,CardContent,Typography,LinearProgress,Table,TableBody,TableCell,TableHead,TableRow,Box} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { studentData } from "../data/studentData";
import Navbar from "../components/Navbar";
export default function CourseAnalytics() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const selectedCourse = studentData.courses[id];
    setCourse(selectedCourse || null);
  }, [id]);

  if (!course) {
    return <Typography variant="h6" color="error">Course not found!</Typography>;
  }

  const progressPercent = (course.progress.completed / course.progress.total) * 100;

  return (
    <>
    <Navbar/>
    <Box sx={{ maxWidth: 1200, margin: "2rem auto", padding: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom fontWeight="bold" textAlign={"center"}>
            {course.name}
          </Typography>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="body1" gutterBottom>
              Progress: {course.progress.completed} / {course.progress.total} Modules
            </Typography>
            <Typography variant="body1" gutterBottom>
              Progress Percentage : {progressPercent}%
            </Typography>
            <LinearProgress variant="determinate" value={progressPercent} sx={{ height: 10, borderRadius: 5 }} />
          </Box>
          <Box sx={{ width: "100%", height: 300, marginBottom: 3 }}>
            <ResponsiveContainer>
              <BarChart data={course.chart}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="progress" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          <Typography variant="h6" gutterBottom>
            Quiz Scores
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Quiz</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Attempts</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {course.table.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.quiz}</TableCell>
                  <TableCell>{row.score}</TableCell>
                  <TableCell>{row.attempts}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
    </>
  );
}
