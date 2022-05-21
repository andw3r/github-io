import React, { useState } from "react";
import ReactPlayer from "react-player/file";
import playBtn from "../assets/img/playbtn.png"
import Image from 'next/image'

const MainVideo = () => {
  const [play, setPlay] = useState(false)
  

  return (
    <div className="player">
      <div className="player__wrapper">
        <div className={play ? "player__background" : "player__background active" } onClick={() => setPlay(prevState => !prevState)}></div>

        <div className={play ? "player__button" : "player__button active"} onClick={() => setPlay(prevState => !prevState)}>
          <Image src={playBtn} />
        </div>
        
        <ReactPlayer 
          onClick={() => setPlay(prevState => !prevState)}
          playing={play} 
          url="/mainVideo.mp4" 
          width="100%" 
          height="100%" 
          className="player__video" />
      
      </div>
    </div>
  )
}

export default MainVideo;