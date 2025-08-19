import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { studentData } from '../data/studentData';

function Upcoming() {
    
  return (
    <div className='upcoming'>
      <Paper elevation={6}  sx={{backgroundColor:"#93DA97"}}>
        <Box sx={{ padding: "5vh 0" }}>
          <Typography 
            variant='h4' 
            textAlign={'center'} 
            fontWeight={'bold'} 
            fontFamily={"Sacramento,sans-serif"}
            color='#E8FFD7'
          >
            Upcoming ⏰
          </Typography>
          {studentData.upcoming.map((val, key) => (
            <ul key={key} style={{ listStyle: 'none' }}>
              <li style={{ fontFamily: "Oswald,sans-serif", fontSize: "1.25rem" ,color:"aliceblue"}}>
                ⏰ {val.task}
              </li>
              
              <p style={{ marginLeft: '1.5rem',color:"#3E5F44" }}> Due in {Math.ceil((new Date(val.due) - new Date()) / (1000 * 60 * 60 * 24))} days</p>
            </ul>
          ))}
        </Box>
      </Paper>
    </div>
  );
}

export default Upcoming;
