import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <ul>
            <li><img src="./Images/Frozen_Rose.png"></img></li>
            <li><span>Frozen Rose</span></li>
          </ul>
        </Link>
      </div>
      <div className="right">
        <ul>
          <li><Link to="/projects"><span>Projects</span></Link></li>
          <li><Link to="/about"><span>About</span></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;