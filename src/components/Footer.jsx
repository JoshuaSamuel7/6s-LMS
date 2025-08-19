import React from "react";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} LMS. All rights reserved.
        </p>
        <nav className="footer-nav">
          <a href="" aria-label="About Us">About</a>
          <a href="" aria-label="Privacy Policy">Privacy Policy</a>
          <a href="" aria-label="Terms of Service">Terms</a>
          <a href="" aria-label="Contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
