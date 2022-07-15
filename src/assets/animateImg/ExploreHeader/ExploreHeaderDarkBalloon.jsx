import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import darkBalloon from "./img/darkBlueBalloon.png"
import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";



const ExploreHeaderDarkBalloon = () => {

    useEffect(() => {
        const explore_dark_balloon_scene = document.getElementById("explore_dark_balloon_scene");
        new Parallax(explore_dark_balloon_scene);
    });

    return (
        <div className={styles.exploreDarkBalloon_container} >
            <img src={darkBalloon} alt=""/>
            <div id='explore_dark_balloon_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};
export default ExploreHeaderDarkBalloon;