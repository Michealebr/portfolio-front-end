import React from "react";
import "./LearningPath.css";

const learningPathData = [
  {
    id: [{ name: "Html" }, { name: "Css" }],
    title: "HTML & CCS",
    logo: [
      "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
      "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    ]
    // contentProgress: "COMPLETED",
  },
  {
    id: [{ name: "Javascript" }],
    title: "Javascript",
    logo: [
      "https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg",
    ]
    
    // contentProgress: "COMPLETED",
  },
  {
    id: [{ name: "React" }],
    title: "React",
    logo: ["https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"],
   
    // contentProgress: "60% COMPLETE",
  },
  {
    id: [{ name: "Node.js" }, { name: "Express.js" }],
    title: "Node.js & Express",
    logo: [
      "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",

    ]
    // contentProgress: "10% COMPLETE",
  },
  {
    id: [{ name: "Typescript" }],
    title: "Typescript",
    logo: [
      "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",

    ]
    // contentProgress: "10% COMPLETE",
  },
  {
    id: [{ name: "Mysql" }],
    title: "Mysql",
    logo: [
      "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",

    ]
    // contentProgress: "10% COMPLETE",
  },
];

const LearningPath = ({id}) => {
  return (
    <div className="card card-learning-path" id={id}>
      <h2 className="heading-secondary learningpath-title">Learning path</h2>
      <div className="learning-path-container">
{/* this will dynamically render multiple instances of the content-container div with different values */}
        {learningPathData.map((item, index) => (
          <div className="content-container" key={index}>
            <div className="content-header">
              <div className="content-logo">
                {item.logo.map((imageUrl, imgIndex) => (
                  <img
                    className="logo-vector"
                    src={imageUrl}
                    alt={`${item.id[imgIndex].name}-logo`}
                  />
                ))}
              </div>
              <div className="content-title">
                <div className="learning-course">
                {item.title}
                </div>

                {/* <a
                  className="learning-course"
                  href={item.courseLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a> */}
              </div>
            </div>
            <div className="content-progress">{item.contentProgress}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
