import { useContext, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AuthContext } from "./context/AuthContext";
import DashBoard from "./pages/DashBoard";
import Register from "./pages/Register";
import CourseAnalytics from "./pages/CourseAnalytics";

function App() {
  const {role} = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={role?<Navigate to={"/"}/>:<Login/>} />
          <Route path="/" element={role ?<DashBoard/>:<Navigate to={"/login"} /> } />
          <Route path="/register" element={<Register/>}/>
          <Route path="/course/:id" element={role==="Student"?<CourseAnalytics />:<Navigate to={"/login"}/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
