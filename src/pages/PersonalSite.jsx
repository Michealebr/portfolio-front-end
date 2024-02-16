import React from 'react'
import AboutProjectLayout from "./AboutProjectLayout"
import "./PersonalSite.css"
import "./PagesMediaQuries.css"
import "./forAllPages.css"
import useGoBack from './page-components/useGoBack';

const PersonalSite = () => {

  const goBack = useGoBack(); // Use the custom hook to get the goBack function

  return (
    <div>
         <button className="go-back-btn" onClick={goBack}> <img className="x-ic-size" src="/images/x-icon.svg" alt="cross" /></button>
         <div className="proj-body">
      <AboutProjectLayout
      projectTitle={"Personal Site"}
      projectSubTitle={"To showcase all my projects."}
 
  aboutText={"I built this website as a platform to showcase my web development projects and document my journey as a developer. Inspired by the minimalist elegance of iOS design, I chose a clean and sleek aesthetic for the website to reflect my appreciation for simplicity and functionality. This design choice not only aligns with my personal style but also emphasizes the focus on the projects themselves, allowing visitors to easily navigate and explore the work I'm passionate about."}
  addClass="hidevisit"
  extraText=""
     >
      </AboutProjectLayout>
      <div className="personal-img-grid-ctn">
      <img className='personal-img p-img1' src="\images\portfolio\personalimg1.jpeg" alt="project images" />
      <img className='personal-img p-img2' src="\images\portfolio\personalimg2.jpeg" alt="project images" />
      <img className='personal-img p-img3' src="\images\portfolio\personalimg3.jpeg" alt="project images" />
      <img className='personal-img p-img4' src="\images\portfolio\personalimg5.jpeg" alt="project images" />

      </div>
      </div>
    </div>
  )
}

export default PersonalSite