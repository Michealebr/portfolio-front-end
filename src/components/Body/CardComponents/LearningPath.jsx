import React from "react";
import "./LearningPath.css";

const learningPathData = [
  {
    id: [{ name: "Html" }, { name: "Css" }],
    title: "Responsive Web Design with HTML and CCS",
    logo: [
      "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
      "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    ],
    courseLink:
      "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    contentProgress: "COMPLETED",
  },
  {
    id: [{ name: "Javascript" }],
    title: "Javascript Algorithms and Data Structures",
    logo: [
      "https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg",
    ],
    courseLink:
      "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    contentProgress: "COMPLETED",
  },
  {
    id: [{ name: "React" }],
    title: "React",
    logo: ["https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"],
    courseLink:
      "https://www.freecodecamp.org/learn/front-end-development-libraries/",
    contentProgress: "60% COMPLETE",
  },
  {
    id: [{ name: "Node.js" }, { name: "Express.js" }, { name: "MongoDB" }],
    title: "Back End Development and APIs with Node.js and Express",
    logo: [
      "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
      "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    ],
    courseLink:
      "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    contentProgress: "10% COMPLETE",
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
                <a
                  className="learning-course"
                  href={item.courseLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
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
