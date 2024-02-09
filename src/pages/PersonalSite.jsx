import React from 'react'
import AboutProjectLayout from "./AboutProjectLayout"
import "./PersonalSite.css"

const PersonalSite = () => {
  return (
    <div>
      <AboutProjectLayout
      projectTitle={"Personal Site"}
      projectSubTitle={"My Portfolio SIte"}
  projectImg="/images/PersonalSiteImg.png" 
  aboutText={"Originally, I constructed this portfolio from scratch using vanilla JavaScript, honing my skills and understanding of fundamental web development. However, driven by the aspiration to expand my proficiency and keep pace with the evolving tech landscape, I chose to revamp my portfolio using React. This shift allowed me to immerse myself in a popular and robust framework, gaining valuable experience while catering to the demands of the industry. The decision to rebuild the portfolio in React was primarily influenced by the noticeable trend wherein numerous companies were seeking developers proficient in React. By adopting React, I aimed to align my skills with market demands, ensuring I remain competitive and well-equipped for potential opportunities in the industry."}
  struggleText={"Building a portfolio involved numerous challenges that pushed my problem-solving skills. Initially, integrating the Spotify API posed a significant hurdle. I grappled with the constant need for reauthorization every two hours, wanting the Spotify data to display continuously. Additionally, ensuring the security of my access code and private information, safeguarding them from potential breaches, was an unfamiliar territory that demanded meticulous handling.\n\nAnother obstacle arose regarding my unfamiliarity with Node and Express, requiring a considerable learning curve to effectively leverage these tools. As I aimed to incorporate a map API without incurring subscription costs, I navigated through an older version that was free. Implementing this alternative API while ensuring its seamless integration with the website's night mode and light mode proved to be an intricate yet necessary challenge.\n\nHowever, the transition from vanilla JavaScript to React brought forth a new set of complexities. Features such as night mode and dark mode, which were relatively straightforward in vanilla JS, became convoluted in React. The struggle primarily stemmed from ensuring that the night mode feature in the navbar could harmoniously affect all components within the body, including individual cards like the map card, demanding a deeper understanding of component interactions within React's structure. Overcoming these challenges became pivotal in expanding my knowledge and capabilities in web development."}
  improvementText={"Addressing these challenges was a transformative learning experience throughout the development of my portfolio. To overcome the recurring reauthorization issue with the Spotify API occurring every two hours, I delved into their documentation and learned about using a refresh token. Implementing this solution, the refresh token allowed continuous functionality without the need for frequent reauthorization. Additionally, I recognized the significance of a .env file to securely store sensitive information like API keys, heightening the protection of my private data.\n\nMy journey through Node, Express, and the Spotify API involved thorough research, combining insights from extensive Googling, Spotify documentation, and even leveraging guidance from ChatGPT. Some parts were straightforward, while others required meticulous debugging. Setting up an Express server surprisingly emerged as a relatively straightforward process, marking a pivotal achievement in my understanding of backend technologies.\n\nTransitioning to React revolutionized my workflow. Its efficiency and reusable components notably boosted my productivity. React's structured, component-based architecture provided a clear departure from the intricacies of vanilla JavaScript. Utilizing components made navigation and comprehension significantly smoother. Gradually, as I delved deeper, I gained a firmer grasp on managing higher levels of state, enabling the synchronization of the entire website with the dark mode feature. Overall, this experience propelled my understanding of web development and illuminated the immense benefits of using modern frameworks like React."}
  futureText={"In the future, I plan to explore the integration of different frameworks like Tailwind CSS to enhance my portfolio, showcasing a diverse array of skills I've acquired. This will allow me to present my abilities more dynamically on the portfolio page. Additionally, I aim to embark on creating more projects to showcase the progression and evolution of my development skills over time. I'm particularly excited about delving into a full-stack project, as it will provide the opportunity to build complete applications from end to end, enabling me to solidify my capabilities as a developer across multiple facets of development."}
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