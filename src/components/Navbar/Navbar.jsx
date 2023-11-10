import React, { useEffect, useRef} from 'react'
import './Navbar.css'


const Navbar = ({ toggleDarkMode, setActiveFilter, activeFilter}) => {

    const handleToggle = () => { 
      toggleDarkMode();
    };
 
    const navbarRef = useRef(null);
  useEffect(() => {

    // this will get the current navbar from our html almost like doc.queryselector
    const navbar = navbarRef.current;
    const handleClick = (event) => {
      const clicked = event.target.closest('.filter');
      if (!clicked) return;     
      setActiveFilter(clicked.dataset.filter); //this gets the clicked data set and then sets it as the new activefilter so if i click about active filter === about
  
    };
// adds a click event listner which then triggers the handleClick callback
    navbar.addEventListener('click', handleClick);
// this is called "The cleanup function" and comes with useEffect hook this linbe of code will only
// execurte when the navbar becomes unmounted  it removes the event listener added by addEventListener to prevent any potential memory leaks or issues.
    return () => {
      navbar.removeEventListener('click', handleClick);
    };
  }, [setActiveFilter]);


  
    return (
      <div className="header">
        <div className="toggle-button" id="switch" onClick={handleToggle}>
          <div className="switch">
            <div className="toggle">
              <div className="toggle-icon sun" name="sunny" role="img" aria-label="sunny">
                <div className="icon-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512">
                    <title>Sunny</title>
                    <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
                  </svg>
                </div>
              </div>
              <div className="toggle-icon moon" name="moon" role="img" aria-label="moon">
                <div className="icon-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512">
                    <title>Moon</title>
                    <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar" ref={navbarRef}>
          <ul className="nav-list">
          <li className={`filter${activeFilter === "all" ? " active" : ""}`} data-filter="all">
            All
          </li>
          <li className={`filter${activeFilter === "about" ? " active" : ""}`} data-filter="about">
            About
          </li>
          <li className={`filter${activeFilter === "projects" ? " active" : ""}`} data-filter="projects">
            Projects
          </li>
          <li className={`filter${activeFilter === "media" ? " active" : ""}`} data-filter="media">
            Media
          </li>
          </ul>
        </div>
        <a className="contact-button" href="mailto:michael.ebrahimi8@gmail.com" target='_blank' rel="noreferrer">
          <span className="nav-contact">Contact</span>
        </a>
      </div>
    );
  };


export default Navbar



