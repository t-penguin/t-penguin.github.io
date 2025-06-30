import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav>
      <div className="left">
        <NavLink to="/" className="logo">
          <ul>
            <li><img src="/Images/Frozen_Rose.png"></img></li>
            <li><span>Frozen Rose</span></li>
          </ul>
        </NavLink>
      </div>
      <div className="right">
        <ul>
          <li><NavLink to="/projects"><span>Projects</span></NavLink></li>
          <li><NavLink to="/about"><span>About</span></NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;