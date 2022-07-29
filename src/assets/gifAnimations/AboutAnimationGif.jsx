import React from "react";
import './styles.scss'
import AboutGif from "../gifs/aboutgif.gif";
import AboutPng from "../imgs/AboutImg.png";

const AboutAnimationGif = () => {

    return (
        <div className='about_animations_wrapper'>
            <img className='about_animation_gif' src={AboutGif} alt=""/>
            <img className='about_animation_png' src={AboutPng} alt=""/>
        </div>
    )
}

export default AboutAnimationGif