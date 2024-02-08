import React from 'react'
import AboutProjectLayout from "./AboutProjectLayout"
import "./stacked.css";

const Stacked = () => {
  return (
    <div>
        <AboutProjectLayout projectTitle={"Stacked"}
 projectSubTitle={"Inventory management for resellers"}
  aboutText={"Tired of managing my sneaker reselling inventory with Excel and Notion, I found myself craving a more visually appealing and user-friendly solution. I'm someone who values user interface (UI) design, and staring at bland spreadsheets just wasn't cutting it for me. Plus, the tedious task of setting up formulas and organizing data in spreadsheets was a major pain point.So, I made a decision to develop a piece of software that not only looks great but also offers a much smoother workflow from stock management to the sold list. As someone who values data, having all the essential data points any reseller needs conveniently located on one page feels incredibly satisfying to use."}
//   futureText={"In the future, I plan to explore the integration of different frameworks like Tailwind CSS to enhance my portfolio, showcasing a diverse array of skills I've acquired. This will allow me to present my abilities more dynamically on the portfolio page. Additionally, I aim to embark on creating more projects to showcase the progression and evolution of my development skills over time. I'm particularly excited about delving into a full-stack project, as it will provide the opportunity to build complete applications from end to end, enabling me to solidify my capabilities as a developer across multiple facets of development."}
  addClass="hidevisit"
 ></AboutProjectLayout>
    <div className="stacked-img-grid-ctn">
    {/* projectImg1="\images\stacked\stackedimg1.png" 
  projectImg2="\images\stacked\stackedimg2.png" 
  projectImg3="\images\stacked\stackedimg.png" 
  projectImg4="\images\stacked\stackedimg4.png" 
  projectImg5="\images\stacked\stackedimg5.png" */}
  <img className='stacked-img1 stacked-img' src="\images\stacked\stackedimg1.png" alt="" />
  <img className='stacked-img2 stacked-img' src="\images\stacked\stackedimg5.png" alt="" />

    </div>
    </div>
  )
}

export default Stacked