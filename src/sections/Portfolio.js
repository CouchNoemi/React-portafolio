import React from "react";
import Project from "../components/Project";
import testingImg from "../assets/test.png";

const projects = [
  {
    title: "Project 1",
    view: "https://codewithtdesmond.com",
    code: "https://github.com/NoemiCouch",
    subTitle: "MERN",
    img: testingImg,
  },
  {
    title: "Project 2",
    view: "https://codewithtdesmond.com",
    code: "https://github.com/NoemiCouch",
    subTitle: "React",
    img: testingImg,
  },
  {
    title: "Project 3",
    view: "https://codewithtdesmond.com",
    code: "https://github.com/NoemiCouch",
    subTitle: "MERN",
    img: "https://www.creative-tim.com/blog/content/images/wordpress/2021/01/blog-4-1.jpg",
  },
  {
    title: "Project 4",
    view: "https://codewithtdesmond.com",
    code: "https://github.com/NoemiCouch",
    subTitle: "HTML, CSS",
    img: testingImg,
  },
  {
    title: "Project 5",
    view: "https://codewithtdesmond.com",
    code: "https://github.com/NoemiCouch",
    subTitle: "MERN",
    img: testingImg,
  },
  {
    title: "Project 6",
    view: "https://codewithtdesmond.com",
    code: "https://github.com/NoemiCouch",
    subTitle: "React",
    img: testingImg,
  },
  {
    title: "Project 7",
    view: "https://codewithtdesmond.com",
    code: "https://github.com/NoemiCouch",
    subTitle: "MERN",
    img: testingImg,
  },
  {
    title: "Project 8",
    view: "https://codewithtdesmond.com",
    code: "https://github.com/NoemiCouch",
    subTitle: "NodeJS",
    img: testingImg,
  },
];

const Portfolio = () => {
  return (
    <div className="myCon">
      <h1 className="portTitle">Portfolio</h1>
      <div className="projects">
        {projects.map((p, i) => (
          <Project
            key={i}
            title={p.title}
            subTitle={p.subTitle}
            img={p.img}
            code={p.code}
            view={p.view}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
