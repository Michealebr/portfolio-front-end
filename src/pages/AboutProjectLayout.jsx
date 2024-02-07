import React, { useEffect } from "react";
import "./AboutProjectLayout.css";
import AnimatePage from "./AnimatePage";

const AboutProjectLayout = ({
  projectTitle,
  projectSubTitle,
  projectImg,
  aboutText,
  // whyText,
  // struggleText,
  // improvementText,
  // futureText,
  projecturl,
  addClass
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This ensures that it runs only when the component mounts

  // const activePage = 'about';
  // const struggleParagraphs = struggleText
  //   .split("\n\n")
  //   .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  // const improvementParagraphs = improvementText
  //   .split("\n\n")
  //   .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  // const futureParagraphs = futureText
  //   .split("\n\n")
  //   .map((paragraph, index) => <p key={index}>{paragraph}</p>);

    
  return (
    <AnimatePage>
    <div>
      <div className="project-header">
        <a className={`contact-button ${addClass}`} href={projecturl} target="_blank" rel="noreferrer" >
          <span className="nav-contact">Visit Site</span>
        </a>

      </div>
      <div className="page-body-ctn">
        <div className="text-ctn">
        <div className="title-container ">
      <h1 className="project-title">{projectTitle}</h1>
      <h2 className="project-sub-title">{projectSubTitle}</h2>
         </div>
         <div className="about-ctn">
         {/* <h3 className="text-title">why i built this</h3> */}
            <p className="projcect-text">{aboutText}</p>
         </div>
        </div>
        <div className="proj-img-ctn">
          
        </div>
     


      {/* <div className="project-container">
       
        <div className="img-container">
          <img className="project-img" src={projectImg} alt="project img"></img>
        </div>

          <div className="about-text-container ">
        
            <div className=" card">
           
            </div>
           
          </div>
          <div className="struggle-text-container card">
            <h3 className="text-title">Problems I Faced</h3> */}
            {/* <p className="projcect-text">{struggleParagraphs}</p> */}
          {/* </div>
          <div className="improvements-textoject-container card">
            <h3 className="text-title">How I got over those problems</h3> */}
            {/* <p className="projcect-text">{improvementParagraphs}</p> */}
          {/* </div>
          <div className="future-plans-text-container">
            <h3 className="text-title">
              What future improvements i would make
            </h3> */}
            {/* <p className="projcect-text">{futureParagraphs}</p> */}
          {/* </div>
        
      </div> */}
      </div>
    </div>
    </AnimatePage>
  );
};

export default AboutProjectLayout;
