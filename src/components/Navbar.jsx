import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
export default function Navbar() {
    const {logout}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleLogout=()=>{
        logout();
        navigate("/login");
    }
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{background:" linear-gradient(90deg,#7323fa 50%,#ff29a8 100%);",padding:"1vh 0"}}>
        <Toolbar sx={{display:'flex', justifyContent:"space-between"}}>
          <Typography variant="h6" component="div" color='#fffffe '>
            Dashboard
          </Typography>
          <Typography  textAlign="center"variant='h5'color='#fffffe ' fontFamily={"Mozilla Headline,sans-serif"} letterSpacing={"8px"} onClick={()=>navigate("/")}> <LocalLibraryIcon/> LMS</Typography>
          <Button type='submit' onClick={handleLogout} variant='contained' color='error' sx={{backgroundColor:"crimson ","&:hover":{backgroundColor:'#eebbc3'}}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}