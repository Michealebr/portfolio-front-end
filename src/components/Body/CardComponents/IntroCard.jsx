import React from 'react'
import './IntroCard.css'

const IntroCard = ({img, description_main, description_p1, description_p2, id, activeFilter, setActiveFilter }) => {


  const handleExpandButtonClick = () => {
    if (activeFilter) {
       setActiveFilter("about");
    }
  };


  return (
    <div className='card card-intro' id={id}>
      <div className='memoji'>
      <img src={img} className='intro-img' alt='memoji wave'/>
      <p className='headline' >Hey! I'm<span className="Mike"style={{fontFamily:'Shrikhand'}}> Mike</span>,</p>
      </div>
      <p className='intro-text'>{description_main}</p>
      <p className='intro-text'>{description_p1}</p>
      <p className='intro-text'>{description_p2}</p>

      {activeFilter !== "about" && (
      
      <button className="expand-button" onClick={handleExpandButtonClick}>
      <svg className="arrow-expand" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="40" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
      </button>
      )}
      
    </div>
  )
}

export default IntroCard
