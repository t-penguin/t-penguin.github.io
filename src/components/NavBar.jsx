import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h3>Nav Bar</h3>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
};

export default NavBar;