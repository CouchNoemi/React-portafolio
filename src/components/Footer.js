import React from "react";
import github from "../assets/github.png";
import stackoverflow from "../assets/stackoverflow.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";
import LogoNoemi from "../assets/LogoNoemi.png"

const Footer = () => {
  return (
    <footer>
      <img
        src= {LogoNoemi}
        alt="logo"
        className="logo"
      />
      <div className="icons">
        <Link to="https://github.com/CouchNoemi">
          <img src={github} alt="github" />
        </Link>
        <Link to="https://github.com/CouchNoemi">
          <img src={stackoverflow} alt="stackoverflow" />
        </Link>
        <Link to="https://github.com/CouchNoemi">
          <img src={linkedin} alt="linkedin" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
