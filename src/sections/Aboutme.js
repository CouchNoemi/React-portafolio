import React from "react";
import github from "../assets/github.png";
import stackoverflow from "../assets/stackoverflow.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

const Aboutme = () => {
  return (
    <div className="container about">
      <img
        src="https://storage.needpix.com/rsynced_images/female-2835524_1280.jpg"
        alt="myphoto"
        className="myphoto"
      />
      <div>
        <h1>About Me</h1>
        <br />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.{" "}
        </p>
        <br />
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like)
        </p>
        <br />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.{" "}
        </p>
        <br />
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like)
        </p>
        <br />
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
      </div>
    </div>
  );
};

export default Aboutme;
