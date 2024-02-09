import React from 'react';
import AboutProjectLayout from "./AboutProjectLayout"
import "./Aestige.css"
const Aestige = () => {
  return (
    <div>
<AboutProjectLayout projectTitle={"Aestige"}
 projectSubTitle={"Freelance Project for a Aesthetics business "}
  projectImg1="\images\aestige\aestige.png" 
  projectImg2="\images\aestige\aestigeimg2.png" 
  projectImg3="\images\aestige\aestigeimg3.png" 
  projectImg4="\images\aestige\aestigeimg4.png" 
  projectImg5="\images\aestige\aestigeimg5.png" 
  aboutText={"I connected with a business owner seeking to elevate their brand from just an Instagram page to a professionally tailored website. Through collaborative efforts, we engaged in a series of discussions and design iterations, persistently refining the website until it aligned perfectly with the client's vision."}
  struggleText={"While constructing the website, I encountered several challenges that demanded creative solutions. The primary hurdle emerged during the design phase. I aimed to craft a website that outshone other beauty aesthetics platforms, striving for a modern and highly professional appearance. However, limitations surfaced due to the quality of the client's images. Repeatedly refining the final mock-up became necessary, integrating Adobe's stock images to compensate for the lower-quality originals. Unfortunately, the use of these stock photos posed a different problem—being excessively large files, they significantly slowed down the website, affecting its overall professionalism.\n\nMoreover, I grappled with integrating an email list function. The aim was to enable the business to engage in email marketing, potentially leading to increased revenue. However, implementing this feature in a user-friendly manner for the client posed an unexpected challenge, requiring more research and innovative strategies.\n\nTowards the project's completion, my focus shifted to enhancing user experience by creating seamless transitions between pages. Exploring available options led me to the 'swup' JavaScript plugin, which promised smoother page transitions. However, its implementation inadvertently disrupted the website's functionality. Swup's control over the page load lifecycle hindered standard browser events, making it complex to trigger custom code. This unexpected consequence demanded a thorough reevaluation of the website's navigation structure to ensure optimal performance without memory leaks. These challenges provided invaluable learning experiences, compelling me to adopt alternative methods and problem-solving approaches in web development."}
  improvementText={"Addressing the limitations posed by oversized image files affecting the website's performance, I promptly optimized the design by compressing these files from 1GB to 500KB. This transformation notably enhanced the site's speed and overall operation while maintaining minimal loss of image quality.\n\nTo resolve the issue with email collection, I navigated these challenges by discovering and implementing Mailchimp's API. This solution streamlined the process of gathering customer data, allowing the client to build a tailored audience for more effective marketing efforts.\n\nTo address the disruptions caused by 'swup,' I thoroughly studied the documentation and diligently implemented the recommended approaches. Through persistent efforts, I successfully resolved the issues, ensuring proper functionality and maintaining seamless page transitions."}
  futureText={"Utilizing a framework like React would have expedited development. For instance, in React,  I could have created a dedicated component, acting as a template for each procedure. By constructing it just once, I could have efficiently generated multiple procedures for my client in quicker succession, ensuring faster and more scalable development.\n\nIn retrospect, routing between pages would have been smoother with a framework like React, and I'd avoid solutions like 'swup' to streamline the website's functionality.\n\nThough my client preferred using setmore.com for booking and calendar management, in future projects, I'd aim to integrate payment processing through platforms like Stripe and expand the booking system for enhanced flexibility and customer interaction.\n\nAdditionally, incorporating a backend system would empower my client to manage and modify specific elements like prices and procedures through a simple dashboard, ensuring greater control and adaptability."}
  projecturl="https://aestige.com/" 
 ></AboutProjectLayout>
 <div className="aestige-img-grid-ctn">
<img className='aestige-img a-img1' src="\images\aestige\aestige.png" alt="" />
<img className='aestige-img a-img2' src="\images\aestige\aestigeimg2.png" alt="" />
<img className='aestige-img a-img3' src="\images\aestige\aestigeimg3.png" alt="" />
<img className='aestige-img a-img4' src="\images\aestige\aestigeimg4.png" alt="" />
<img className='aestige-img a-img5' src="\images\aestige\aestigeimg5.png" alt="" />

 </div>
    </div>
  )
}

export default Aestige