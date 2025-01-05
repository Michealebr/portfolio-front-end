import React, { useEffect } from "react";
import "./Body.css";
import IntroCard from "./CardComponents/IntroCard";
import CryptoCard from "./CardComponents/CryptoCard";
import LearningPath from "./CardComponents/LearningPath";
import MapCard from "./CardComponents/MapCard";
import PortfolioCard from "./CardComponents/PortfolioCard";
import SocialCard from "./CardComponents/SocialCard";
import SpotifyCard from "./CardComponents/SpotifyCard";
import "./MediaQueries.css";
import AnimatePage from "../../pages/AnimatePage";

const Body = ({ isDarkMode, activeFilter, setActiveFilter }) => {
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const cardComponents = {
    // home page
    all: [
      <IntroCard
        key={`intro-card-${activeFilter}`}
        id={`card--intro--${activeFilter}`}
        img="/images/memeoji-intro.png"
        description_main=" I am a passionate software developer with a strong focus on web and mobile development."
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />,
      <CryptoCard id={`card--crypto--${activeFilter}`} key="crypto-card-all" />,
      <LearningPath id={`card--learning--${activeFilter}`} key="learning-card-all"/>,
      <PortfolioCard
      key={`personal-site-card-${activeFilter}`}
        id={`card--project2--${activeFilter}`}
        projectName="Personal Site"
        // classNames="personal-site"
        languages="javascript, html, css, node, express, react"
        projectImage="\images\proj1.png"
        projectLink="/AboutPersonalSite"
      />,
      <PortfolioCard
        key={`Aestige-card-${activeFilter}`}
        id={`card--project1--${activeFilter}`}
        projectName="Aestige"
        languages="javascript, html, css, node, express, figma"
        projectImage="\images\proj2.png"
        projectLink="/AboutAestige"
      />,
      <PortfolioCard
        key={`Stacked-card-${activeFilter}`}
        id={`card--project3--${activeFilter}`}
        projectName="Stacked"
        languages="typescript, react ,mysql,  node, express, electron, chartjs"
        projectImage="\images\stackedmain.png"
        projectLink="/AboutStacked"
      />,
      <SpotifyCard id={`card--spotify--${activeFilter}`} key="spotify-card-all"/>,
      <SocialCard
        key={`linkedin-card-${activeFilter}`}
        id={`card--linked-in--${activeFilter}`}
        classNames="linked-in"
        mediaLink="https://www.linkedin.com/in/michael-ebrahimi-529752254/"
        xmlns="http://www.w3.org/2000/svg"
        path="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
      />,
      <SocialCard
        key={`github-card-${activeFilter}`}
        id={`card--github--${activeFilter}`}
        classNames="github"
        mediaLink="https://github.com/Michealebr"
        xmlns="http://www.w3.org/2000/svg"
        path="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
      />,
    ],

    about: [
      <IntroCard
      key={`intro-card-${activeFilter}`}
        id={`card--intro--${activeFilter}`}
        img="/images/memeoji-intro.png"
        description_main=" I am a passionate software developer with a strong focus on web and mobile development. I love creating innovative, user-friendly solutions and thrive on learning and adapting to new technologies. "
        description_p1="My diverse portfolio showcases my ability to work both independently and collaboratively, consistently delivering high-quality results and exceeding expectations."
        description_p2="With a commitment to growth and staying at the forefront of modern development, I am eager to take on new challenges and create impactful software."
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />,
      <CryptoCard id={`card--crypto--${activeFilter}`} key={`crypto-card-${activeFilter}`}/>,
      <SpotifyCard id={`card--spotify--${activeFilter}`} key={`spotify-card-${activeFilter}`}/>,
      <SocialCard
      key={`linkedin-card-${activeFilter}`}
        id={`card--linked-in--${activeFilter}`}
        classNames="linked-in"
        mediaLink="https://www.linkedin.com/in/michael-ebrahimi-529752254/"
        xmlns="http://www.w3.org/2000/svg"
        path="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
      />,
      <SocialCard
      key={`github-card-${activeFilter}`}
        id={`card--github--${activeFilter}`}
        classNames="github"
        mediaLink="https://github.com/Michealebr"
        xmlns="http://www.w3.org/2000/svg"
        path="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
      />,
    ],

    projects: [
      <PortfolioCard
      key={`Stacked-card-${activeFilter}`}
      id={`card--project3--${activeFilter}`}
      projectName="Stacked"
      languages="typescript, react ,mysql,  node, express, electron, chartjs"
      projectImage="\images\stackedmain.png"
      projectLink="/AboutStacked"
    />,
      <PortfolioCard
        key={`personal-site-card-${activeFilter}`}
        id={`card--project2--${activeFilter}`}
        projectName="Personal Site"
        classNames="personal-site"
        languages="javascript, html, css, node, express, react"
        projectImage="\images\proj1.png"
        projectLink="/AboutPersonalSite"
      />,
      <PortfolioCard
        key={`Aestige-card-${activeFilter}`}
        id={`card--project1--${activeFilter}`}
        projectName="Aestige"
        classNames="mikeskicks"
        languages="javascript, html, css, node, express"
        projectImage="\images\proj2.png"
        projectLink="/AboutAestige"
      />,
    ],
    media: [
      <SocialCard
      key={`linkedin-card-${activeFilter}`}
        id={`card--linked-in--${activeFilter}`}
        classNames="linked-in"
        mediaLink="https://www.linkedin.com/in/michael-ebrahimi-529752254/"
        xmlns="http://www.w3.org/2000/svg"
        path="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
      />,
      <SocialCard
      key={`github-card-${activeFilter}`}
        id={`card--github--${activeFilter}`}
        classNames="github"
        mediaLink="https://github.com/Michealebr"
        xmlns="http://www.w3.org/2000/svg"
        path="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
      />,
    ],
  };

  return (
    <AnimatePage>
    <div className="container">
      <main>
        <div className="grid" id={`grid--${activeFilter}`}>
          {cardComponents[activeFilter] ? (
            cardComponents[activeFilter]
          ) : (
            <div>No matching cards found.</div>
          )}
          {activeFilter === "all" || activeFilter === "about" ? (
            // Render the MapCard inside the grid when activeFilter is "all" or "about"
            <MapCard
              id={`card--map--${activeFilter}`}
              mode={
                isDarkMode
                  ? "d0cb7ac7-ff2d-450f-818b-ad8dc211fa3b"
                  : "streets-v2-light"
              }
            />
          ) : null}
        </div>
      </main>
    </div>
    </AnimatePage>
  );
};

export default Body;
