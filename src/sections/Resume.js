import React from "react";
import pdf from "../assets/test-resume.pdf";

const proficiencies = [
  {
    title: "Front-end Proficiencies",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "JQuery",
      "Responsive Design",
      "React",
      "Bootstrap",
    ],
  },
  {
    title: "Back-end Proficiencies",
    technologies: [
      "APIs",
      "NodeJS",
      "Express",
      "MySQL",
      "Sequelize",
      "MongoDB",
      "Mongoose",
      "REST",
      "GraphQL",
    ],
  },
];

const Resume = () => {
  return (
    <div className="myCon">
      <h1>Resume</h1>
      <div className="mb-3">
        Download my &nbsp;
        <a className="btn btn-sucess" href={pdf} target="_blank">
          <button className="btn btn-success">Resume</button>
        </a>
      </div>
      {proficiencies.map((p) => (
        <ul key={p.title} class="list-group mb-3">
          <li class="list-group-item" aria-current="true">
            <strong>{p.title}</strong>
          </li>
          {p.technologies.map((t) => (
            <li key={t} class="list-group-item">
              {t}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Resume;
