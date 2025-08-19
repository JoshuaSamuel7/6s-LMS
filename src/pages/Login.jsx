import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import './login.css'
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success !== false) {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <h1 className="loginh">LMS</h1>
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        className="login-input"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" sx={{width:"20%", marginTop:"3vh"}}>
        Submit
      </Button>
      <div className="prompt">Don't have an acc? <a href="/register">SignUp</a></div>
    </form>
            
    </div>
  );
}

export default Login;
