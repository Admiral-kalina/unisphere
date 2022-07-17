import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import darkBalloon from "./img/darkBlueBalloon.png"
import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";



const TimeHeaderDarkBalloon = () => {

    useEffect(() => {
        const time_dark_balloon_scene = document.getElementById("time_dark_balloon_scene");
        new Parallax(time_dark_balloon_scene);
    });

    return (
        <div className={styles.timeDarkBalloon_container} >
            <img src={darkBalloon} alt=""/>
            <div id='time_dark_balloon_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};
export default TimeHeaderDarkBalloon;