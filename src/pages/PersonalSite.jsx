import React from 'react'
import AboutProjectLayout from "./AboutProjectLayout"
import "./PersonalSite.css"

const PersonalSite = () => {
  return (
    <div>
      <AboutProjectLayout
      projectTitle={"Personal Site"}
      projectSubTitle={"To showcase all my projects."}
 
  aboutText={"I built this website as a platform to showcase my web development projects and document my journey as a developer. Inspired by the minimalist elegance of iOS design, I chose a clean and sleek aesthetic for the website to reflect my appreciation for simplicity and functionality. This design choice not only aligns with my personal style but also emphasizes the focus on the projects themselves, allowing visitors to easily navigate and explore the work I'm passionate about."}
  addClass="hidevisit"
     >
      </AboutProjectLayout>
      <div className="personal-img-grid-ctn">
      <img className='personal-img p-img1' src="\images\personal\personalimg1.png" alt="" />
      <img className='personal-img p-img2' src="\images\personal\personalimg2.png" alt="" />
      <img className='personal-img p-img3' src="\images\personal\personalimg3.png" alt="" />
      <img className='personal-img p-img4' src="\images\personal\personalimg5.png" alt="" />

      </div>
    </div>
  )
}

export default PersonalSite