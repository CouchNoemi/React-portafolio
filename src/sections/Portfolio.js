import React from "react";
import testingImg from "../assets/test.png";

const Portfolio = () => {
  return (
    <div className="container">
      <h1 className="portTitle">Portfolio</h1>
      <div className="projects">
        <div className="card">
          <div className="overlay">
            <h2>PROJECT 1</h2>
            <p>MERN stack</p>
          </div>
          <img src={testingImg} alt="testing img" />
        </div>
        <div className="card">
          <div className="overlay">
            <h2>PROJECT 1</h2>
            <p>MERN stack</p>
          </div>
          <img src={testingImg} alt="testing img" />
        </div>

        <div className="card">
          <div className="overlay">
            <h2>PROJECT 1</h2>
            <p>MERN stack</p>
          </div>
          <img src={testingImg} alt="testing img" />
        </div>
        <div className="card">
          <div className="overlay">
            <h2>PROJECT 1</h2>
            <p>MERN stack</p>
          </div>
          <img src={testingImg} alt="testing img" />
        </div>
        <div className="card">
          <div className="overlay">
            <h2>PROJECT 1</h2>
            <p>MERN stack</p>
          </div>
          <img src={testingImg} alt="testing img" />
        </div>
        <div className="card">
          <div className="overlay">
            <h2>PROJECT 1</h2>
            <p>MERN stack</p>
          </div>
          <img src={testingImg} alt="testing img" />
        </div>
        <div className="card">
          <div className="overlay">
            <h2>PROJECT 1</h2>
            <p>MERN stack</p>
          </div>
          <img src={testingImg} alt="testing img" />
        </div>
        <div className="card">
          <div className="overlay">
            <h2>PROJECT 1</h2>
            <p>MERN stack</p>
          </div>
          <img src={testingImg} alt="testing img" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
