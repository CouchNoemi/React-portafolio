import React from "react";
import Project from "../components/Project";
import WeatherForecast from "../assets/Weather Dashboard.png";
import Pokemon from "../assets/Pokemon.png";
import JsBackend from "../assets/JavaScript-logo.png";
import NoteTaker from "../assets/NoteTaker.png";
import CabinConundrum from "../assets/CabinCanundrun.png";
const projects = [
  {
    title: "Weather forecast",
    view: "https://couchnoemi.github.io/weather-forecast2nd/",
    code: "https://github.com/CouchNoemi/weather-forecast2nd",
    subTitle: "API",
    img: WeatherForecast,
  },
  {
    title: "Read me Generator",
    view: "https://drive.google.com/file/d/105qgysfpc_vM-FhnWaGIcaVDGVLM5Cu1/view",
    code: "https://github.com/CouchNoemi/readme-generator#installation",
    subTitle: "Node.js",
    img: JsBackend,
  },
  {
    title: "Logo Maker",
    view: "https://drive.google.com/file/d/1T6q4MnN1FzZ5iyC4zgrJ8ISKw1FCY4sI/view",
    code: " https://github.com/CouchNoemi/Logo-maker",
    subTitle: "Node.js Jest",
    img: JsBackend,
  },
  {
    title: "Note Taker",
    view: "https://note-takertwo.herokuapp.com/notes",
    code: "https://github.com/CouchNoemi/note-taker",
    subTitle: "Express",
    img: NoteTaker,
  },
  {
    title: "Employee tracker",
    view: "https://drive.google.com/file/d/1gvbAbBNEvGSiJWAtZIz9b-bQnEg_RpaM/view",
    code: "https://github.com/CouchNoemi/employee-tracker",
    subTitle: "mysql2, Inquirer, Express",
    img: JsBackend,
  },
  {
    title: "E-commerce Back-end",
    view: "https://drive.google.com/file/d/1-LcnokFiDjYzQXBoXiRPUXtHF9rSrEVn/view",
    code: "https://github.com/CouchNoemi/ECommerce-BackEnd",
    subTitle: "Express, Sequelize, mysql2",
    img: JsBackend,
  },
  {
    title: "Pokemon App",
    code: "https://carsov2.github.io/Poke-Gif/",
    view: "https://github.com/Carsov2/Poke-Gif",
    subTitle: "Javascript, Html, Css,Pokemon API",
    img: Pokemon,
  },
  {
    title: "Cabin Conundrum",
    view: "https://enigmatic-reaches-68692.herokuapp.com/",
    code: "https://github.com/dylanstormjohnson/cabin-conundrum",
    subTitle:
      "handlebars.js, MySQL, jQuery, Anime.js, CSS, Bootstrap, and JavaScript",
    img: CabinConundrum,
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
