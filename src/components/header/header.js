import React from "react";
import kasaImg from "../../data/asset/LOGO.png";
import { NavLink } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div className="main">
      <div className="header">
        <img className="logo" src={kasaImg} alt="logo kasa"></img>
        <nav className="nav">
          <ul className="navBar">
            <NavLink
              className="link"
              to="/"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              <li>Accueil</li>
            </NavLink>
            <NavLink
              className="link"
              to="/About"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              <li>A Propos</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
