import React from 'react'
import ReactPlayer from 'react-player';
import heroVideo from './HeroVideo.mp4';

function Hero() {
 
      
  return (
    <ReactPlayer
    url={heroVideo}
    playing
    loop
    muted
    width="100%"
    height="100%"
  />
  )
}

export default Hero