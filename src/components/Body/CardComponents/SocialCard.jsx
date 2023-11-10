import React from 'react'
import './SocialCard.css'

const SocialCard = ({classNames, mediaLink, xmlns, path, id}) => {
  return (
    <div className={`card card-${classNames} sm-card`} id={id}>
                    <a className="social-media-container" href={mediaLink} target="_blank" rel="noreferrer">
                        <div className="social-media-logo">
                            <svg xmlns={xmlns}  viewBox="0 0 512 512"><path d={path}></path></svg>
                    </div>
                    </a>                   
                </div>
  )
}

export default SocialCard