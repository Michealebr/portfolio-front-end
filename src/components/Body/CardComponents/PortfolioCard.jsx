import React from "react";
import "./PortfolioCard.css";
import { Link } from "react-router-dom";

const PortfolioCard = ({ projectName, languages, projectLink, id, projectImage}) => {
  const languageLogos = {
    javascript: "https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg",
    css: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    html: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    react: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    node: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    express: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    figma: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    mysql: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
    typescript: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
    electron: "https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg",
    chartjs: "https://asset.brandfetch.io/idFdo8ulhr/idg4l58CuH.svg"
  };

  const languageList = languages.split(",").map((lang) => lang.trim());
  const logos = languageList.map((language, index) => {
    const logoSrc = languageLogos[language] || "default_logo_url";
    return (
      <div key={index}>
        <img className="logo-vector language-logo" src={logoSrc} alt={`${language} logo`} />
      </div>
    );
  });

  return (
    <div
      className={`card project-card card-mobile`}
      id={id}
    >
      <div className="project-name-container">
        <p className="subheading">Project</p>
        <h2 className="heading-secondary proj-title">{projectName}</h2>
      </div>
      <div className="built-with-container">
        <p className="subheading project--helper">BUILT WITH</p>
        <div className="project-logo">
          {logos}
        </div>
      </div>
      <div className="project-preview-container">
        <img class="project-image" src={projectImage} alt="project img"/>
      </div>
      <div className="btn-container">
      <Link className="project-btn view-project-btn" to={projectLink} >
          <div className="arrow">
            <svg
              id="Arrow.7"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 18.256 18.256"
              style={{ transition: ".3s" }}
            >
              <g
                id="Group_7"
                data-name="Group 7"
                transform="translate(5.363 5.325)"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M14.581,7.05,7.05,14.581"
                  transform="translate(-7.05 -7.012)"
                  fill="none"
                  stroke="#0D1117"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M10,7l5.287.037.038,5.287"
                  transform="translate(-7.756 -7)"
                  fill="none"
                  stroke="#0D1117"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </g>
              <path
                id="Path_12"
                data-name="Path 12"
                d="M0,0H18.256V18.256H0Z"
                fill="none"
              ></path>
            </svg>
          </div>
          <p className="arrow-text">View</p>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
