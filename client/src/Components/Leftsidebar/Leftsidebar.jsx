import React from "react";
import "./Leftsidebar.css";
import { NavLink } from "react-router-dom";
import Globle from "../../assets/Globle.png";
import ThemeSwitcher from "../ThemeSwitcher";
const Leftsidebar = () => {
  return (
    <ThemeSwitcher>
      <div className="left-sidebar">
        <nav className="side-nav">
          <NavLink to="/" className="nav-side-links" activeclassname="active">
            <p>Home</p>
          </NavLink>
          <div className="nav-side-div">
            <div>
              <p>PUBLIC</p>
            </div>
            <NavLink
              to="/Questions"
              className="nav-side-links"
              activeclassname="active"
            >
              <img src={Globle} alt="globle" style={{ width: "14%" }} />
              <p style={{ paddingLeft: "10px" }}>Question</p>
            </NavLink>
            <NavLink
              to="/Tags"
              className="nav-side-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </NavLink>
            <NavLink
              to="/Users"
              className="nav-side-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </NavLink>
          </div>
        </nav>
      </div>
    </ThemeSwitcher>
  );
};

export default Leftsidebar;
