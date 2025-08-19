import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {studentData} from '../data/studentData.js'
import { useNavigate } from 'react-router';
export default function CourseCard({child}) {
    const progress=studentData.courses.find(u=> u.name===child.title)?.progress;
    const progval=Math.floor((progress.completed/progress.total)*100);
    console.log(progval);
    const navigate=useNavigate();
  return (
    <Card sx={{ maxWidth: 345,margin:"4vh 2vw",transition: "transform 0.3s, box-shadow 0.3s","&:hover": {
      transform: "translateY(-10px) scale(1.03)",
      boxShadow: "0 15px 25px grey"
    }}}>
      <CardMedia
        sx={{ height: 170 }}
        image={child.image}
        title={child.title}
      />
      <CardContent>
        <Box sx={{ width: '100%', mt: 2 }}>
        <Typography>Progress</Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:"right"}}>{progval+"%"}</Typography>
        <LinearProgress variant="determinate" value={progval} sx={{ height: "2vh", mt: 0.5, borderRadius:"25px",backgroundColor:"#FCF8DD",  "& .MuiLinearProgress-bar": {
      backgroundColor: "#00809D",
    }, }} />
        </Box>
        <Typography gutterBottom variant="h5" component="div" fontFamily={"Edu NSW ACT Hand Cursive"} fontWeight={"bold"}>
          {child.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} fontFamily={"Montserrat"}>
           {child.info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>navigate(`/course/${child.id}`)}>Open</Button>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}