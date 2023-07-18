import React from "react";

const Project = ({ title, subTitle, img, code, view }) => {
  return (
    <div className="card">
      <div className="overlay">
        <h2>{title}</h2>
        <p>{subTitle}</p>
        <div>
          <a href={view} target="blank">
            👁️‍🗨️ View
          </a>{" "}
          &nbsp;&nbsp;
          <a href={code} target="blank">
            {"</>"} Code
          </a>
        </div>
      </div>
      <img src={img} alt="testing img" />
    </div>
  );
};

export default Project;
