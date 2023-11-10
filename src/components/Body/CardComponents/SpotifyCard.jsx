import React, { useEffect, useState } from 'react'
import './SpotifyCard.css'

const SpotifyCard = ({id}) => {
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [songImg, setSongImg] = useState('');
  const [songUrl, setSongUrl] = useState('')

  const fetchSpotifyData = async () => {
    try {
      const response = await fetch('https://portfoliospotifyapi.up.railway.app/v1/spotify');// change this to real url 
      const data = await response.json();
      setSongName(data.songName);
      setArtistName(data.artistName);
      setSongImg(data.songImg);
      setSongUrl(data.songUrl)

    } catch (error) {
      console.error('Error fetching Spotify data:', error);
    }
  };

  useEffect(() => {
    fetchSpotifyData();
  }, []);



  return (
    <div className="card card-spotify" id={id} >
                    <div className="img-container">
                            <a className="spotify-preview" href={songUrl} target='_blank'rel="noreferrer">
                            <img id="song-img" src={songImg} alt="Song Album Art"/>
                            </a>
                    </div>
                    
                        <img className="spotify-logo" src="/images/spotify-logo.svg" alt="The Spotify logo"/>
                    <div className="song-info">
                        <div className="playing-status-container">
                            <div className="animation-container">
                                <div className="spotify-animation-1"></div>
                                <div className="spotify-animation-2"></div>
                                <div className="spotify-animation-3"></div>
                            </div>
                                <div className="playing-status">
                                    <p className="current-status">Last Played</p>
                                  </div>
                        </div>
                            <div className="song-name">
                                <p id="song-name">{songName}</p>
                            </div>
                            <div className="artist-name" >
                                <p id="artist-name">{artistName}</p>
                            </div>
                    </div>
                    </div>
  )
}

export default SpotifyCard