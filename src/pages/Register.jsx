import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, password, role);
    alert("User registered successfully!");
    navigate("/login");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
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
        <FormControl sx={{width:"100%"}}>
        <InputLabel id="role-label">Role</InputLabel>
          <Select
          labelId="role-label"
          id="demo-simple-select-standard"
          value={role}
          onChange={(e)=>{setRole(e.target.value)}}
          label="Role"
        >
          <MenuItem value={"Student"} >Student</MenuItem>
          <MenuItem value={"Admin"}>Admin</MenuItem>
        </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ width: "30%", marginTop: "3vh" }}
        >
          Register
        </Button>
        <div className="prompt">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default Register;
