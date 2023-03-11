import React from "react";
import "./Navbar.css";
import logo from "../../Image/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = ({ globalState }) => {
  return (
    <div className="navbar">
      <nav className="logo-div">
        <img className="logo" src={logo} alt="" />
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <h1 className="logo-text">FASHION</h1>
        </NavLink>
      </nav>
      <nav className="links">
        <NavLink to="/catalouge" style={{ textDecoration: "none" }}>
          <span className="link-text">CATALOGUE</span>
        </NavLink>
        <NavLink to="/fashion" style={{ textDecoration: "none" }}>
          <span className="link-text">FASHION</span>
        </NavLink>
        <NavLink to="/favorite" style={{ textDecoration: "none" }}>
          <span className="link-text">FAVORITE</span>
        </NavLink>
        <NavLink to="/lifestyle" style={{ textDecoration: "none" }}>
          <span className="link-text">LIFESTYLE</span>
        </NavLink>
        {globalState.user?.displayName ? (
          <button className="nav-btn">
            Logout {globalState.user?.displayName}
          </button>
        ) : (
          <NavLink to="/login">
            <button className="nav-btn">SIGN UP</button>
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
