import React from 'react'
import {ResponsiveContainer,Pie,PieChart,Tooltip,Cell} from 'recharts'
export default function CourseCompletion({progress}) {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CFE'];
    
  return (
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
  )
}
