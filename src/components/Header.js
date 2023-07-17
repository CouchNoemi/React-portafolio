import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/1024px-Amazon-logo-white.svg.png"
        alt="logo"
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
