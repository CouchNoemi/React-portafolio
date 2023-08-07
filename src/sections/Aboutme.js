import React from "react";
import github from "../assets/github.png";
import stackoverflow from "../assets/stackoverflow.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";
const Aboutme = () => {
  return (
    <div className="myCon about">
      <img src={profile} alt="profile" className="myPhoto" />
      <div>
        <h1>About Me</h1>
        <br />
        <p>
        
        </p>
        <br />
        <p>
      Hello, I am Noemi Couch I was born in November 24th I am from Ecuador,
       I emigrated when I turned 17 years old to persue my dream of giving me and my family 
       a better life. I speak spanish as my native language my second language is english and my third would be
       italian, due to my italian descendancy. I love to travel and get to know new cultures.
       I love sports like martial arts I practiced Karate for 4 years now I am doing Kickboxing. I am married and I have 2 dogs!
        </p>
        <br />
        <p>
          I have a passion for technologies and I love coding! 
          I have worked in the manufacturing industrial field for two years, I am currently in a managment position.
          Organizing and problem solving is one of my favorite things to do.
          I have worked in many projects and learnd a lot about javascript, front end and back end web developing.
          Please Take a look at my proficiencies in my resume.
        </p>
        <br />
        <p>
       You can also take a look at my projects in my portfolio. 
       if you click on the github link it will take you to my github profile where you can find all the projects listed in the portfolio and more.
       if you have any questions contact me.
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
