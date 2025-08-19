import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { studentData } from '../data/studentData';
function Achievements() {
  return (
    <div className='achieve'>
        <Paper elevation={6} sx={{backgroundColor:"#93DA97"}}>
            <Box sx={{padding:"5vh 0"}}>
                <Typography variant='h4' textAlign={'center'} fontWeight={'bold'} fontFamily={"Sacramento,sans-serif"}color='#E8FFD7'>Achievements🥇</Typography>
                {studentData.achievements.map((val,key)=>{
                    return(
                        <ul style={{listStyle:'none'}}>
                            <li  id={key} style={{fontFamily:"Oswald,sans-serif",fontSize:"1.25rem",color:'aliceblue'}}>🏆  {val.title}</li>
                            <p style={{color:"#3E5F44"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{val.date}</p>
                        </ul>
                    )
                })}
            </Box>
            </Paper>
    </div>
  )
}

export default Achievements