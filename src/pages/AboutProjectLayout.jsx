import React, { useEffect } from "react";
import "./AboutProjectLayout.css";
import AnimatePage from "./AnimatePage";
import "./PagesMediaQuries.css"

const AboutProjectLayout = ({
  projectTitle,
  projectSubTitle,
  aboutText,
  projecturl,
  addClass
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This ensures that it runs only when the component mounts

  const className = "dark"
  // useEffect(() => {
  //   if(document.body.classList.contains(className)){
  //     return 
  //   }
  //   else if(!document.body.classList.contains(className)){
  //     document.body.classList.toggle(className);
  //   }

  //   // document.body.classList.toggle(className);
  // }, [className]);
    useEffect(() => {
    if(!document.body.classList.contains(className)){
      document.body.classList.toggle(className);
    }
    // document.body.classList.toggle(className);
  }, [className]);

    
  return (
    <AnimatePage>
    <div>
      <div className="project-header">
        <a className={`contact-button ${addClass}`} href={projecturl} target="_blank" rel="noreferrer" >
          <span className="nav-contact">Visit Site</span>
        </a>

      </div>
      <div className="page-body-ctn">
        {/* <div className="text-ctn">
        <div className="title-container ">
      <h1 className="project-title">{projectTitle}</h1>
      </div>
      <h2 className="project-sub-title">{projectSubTitle}</h2>
         </div>
         <div className="about-ctn">
            <p className="projcect-text">{aboutText}</p>
         </div> */}
           <h1 className="project-title">{projectTitle}</h1>
           <div className="proj-text-container ">
            <div className="proj-sub-title">
            <h2 className="project-sub-title">{projectSubTitle}</h2>
            </div>
            <div className="about-ctn">
            <p className="projcect-text">{aboutText}</p>
         </div>


           </div>
        </div>
      </div>
    {/* </div> */}
    </AnimatePage>
  );
};

export default AboutProjectLayout;
