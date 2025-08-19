import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import CourseCard from "../components/Card";
import "./dashboard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CardSlider from "../components/CardSlider";
import Achievements from "../components/Achievements";
import Upcoming from "../components/Upcoming";
import AnalyticsChart from "../charts/AnalyticsChart";
import AdminDashboard from "../components/AdminComponents/AdminDashboard";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import ChatIcon from "@mui/icons-material/Chat";
import { motion, AnimatePresence } from "framer-motion";
function DashBoard() {
  const { role } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  console.log(role);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const showBox = () => {};
  return (
    <>
      <Navbar />
      {role === "Student" ? (
        <>
        <Button
          onClick={() => setShow(!show)}
          sx={{ zIndex:5,backgroundColor: "#008871",minWidth: 0,borderRadius: "50%",width: "60px !important",height: "60px", position: "fixed",bottom: "12px",right: "12px",color: "white",boxShadow: "0 0 0 1px white",
          }}
        >
        <ChatIcon />
        </Button>
        <motion.div>
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{duration: 0.8,delay: 0.5,ease: [0, 0.71, 0.2, 1.01]}}
                className="chat"
              >
              <Chatbot />
          </motion.div>
          )}
          </AnimatePresence>
        </motion.div>
          <div className="admin-dash">
            <h2>Course Progress📊</h2>
            <div className="slider">
              <CardSlider />
            </div>
            <div className="other">
              <div data-aos="fade-right">
                <Achievements />
              </div>
              <div data-aos="fade-left">
                <Upcoming />
              </div>
            </div>
            <AnalyticsChart />
          </div>
        </>
      ) : (
        <>
          <AdminDashboard />
        </>
      )}
      <Footer />
    </>
  );
}

export default DashBoard;
