import React from "react";
import { NavLink } from "react-router-dom";
import LogoNoemi from "../assets/LogoNoemi.png";
const Header = () => {
  return (
    <header>
      <img
        src={LogoNoemi}
        alt="logo"
        className="logo"
      />
      <div>
        <NavLink to="/">About Me</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </header>
  );
};

export default Header;
