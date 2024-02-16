import React, { useEffect } from "react";
import "./AboutProjectLayout.css";
import AnimatePage from "./AnimatePage";
import "./PagesMediaQuries.css"
// import { useNavigate } from 'react-router-dom';

const AboutProjectLayout = ({
  projectTitle,
  projectSubTitle,
  aboutText,
  projecturl,
  addClass,
 extraText,
 websiteName
}) => {
// takes user to pervious page 
  // const navigate = useNavigate(); // useNavigate hook for navigation
  // const goBack = () => {
  //   navigate(-1); // Go back to the previous page
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This ensures that it runs only when the component mounts

  // makes all project pages dark mode
  const className = "dark"
    useEffect(() => {
    if(!document.body.classList.contains(className)){
      document.body.classList.toggle(className);
    }
  }, [className]);

    
  return (
    <AnimatePage>
    <div>
      {/* <div className="project-header">
 <button className="go-back-btn" onClick={goBack}> <img className="x-ic-size" src="/images/x-icon.svg" alt="" /></button>
      </div> */}
      <div className="page-body-ctn">
           <h1 className="project-title">{projectTitle}</h1>
           <div className="proj-text-container ">
            <div className="proj-sub-title">
            <h2 className="project-sub-title">{projectSubTitle}</h2>
            <a className={`page-btn-link ${addClass}`} href={projecturl} target="_blank" rel="noreferrer" >
          <span className="page-btn-link-text">{websiteName} 
          <img className="arrow-proj-size" src="/images/arrow.svg" alt="arrow"/>
          </span>
        </a>
            </div>
            <div className="about-ctn">
            <p className="projcect-text">{aboutText}</p>
            <p className="projcect-text">{extraText}</p>
         </div>


           </div>
        </div>
      </div>
    {/* </div> */}
    </AnimatePage>
  );
};

export default AboutProjectLayout;
