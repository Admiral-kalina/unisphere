import React, {useEffect, useRef} from "react";
import Parallax from "parallax-js";
import Dashed from '../../assets/animateImg/dashedImg/cubeWhiteDashed.png'
import './styles.scss'


export default function TimeCircle() {
    useEffect(() => {
        const full_circle_scene = document.getElementById("full_circle_scene");
        new Parallax(full_circle_scene);
    });


    return (
        <div className='circles_wrapper'>
            <div className='full_circle_box'>
                <svg viewBox='0 0 400 400'>
                    <circle className='full_circle' fill="none" cx="50%" cy="50%" r="100"/>
                </svg>
                <div id='full_circle_scene' className="polygon">
                    <img className='dashed' data-depth={2} src={Dashed} alt=""/>
                </div>
            </div>
            <div className='wrapper_circle_box'>
                <svg viewBox='0 0 400 400'>
                    <circle className='wrapper_circle'  fill="none" cx="50%" cy="50%" r="100"/>
                </svg>
            </div>
        </div>
    );
}