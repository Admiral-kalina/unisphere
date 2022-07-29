import React from "react";
import './styles.scss'
import TimeGif from "../gifs/timegif.gif";
import TimePng from "../imgs/TimeImg.png";

const TimeAnimationGif = () => {

    return (
        <div className='time_animations_wrapper'>
            <img className='time_animation_gif' src={TimeGif} alt=""/>
            <img className='time_animation_png' src={TimePng} alt=""/>
        </div>)
}

export default TimeAnimationGif