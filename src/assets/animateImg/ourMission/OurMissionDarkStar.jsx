import React,{useEffect} from 'react';
import darkStar from  "./img/darkStar.png"
import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";
import Parallax from "parallax-js";

const OurMissionDarkStar = () => {
    useEffect(() => {
        const our_mission_dark_star_scene = document.getElementById("our_mission_dark_star_scene");
        new Parallax(our_mission_dark_star_scene);
    });
    return (
        <div className={styles.darkStar_container} >
            <img src={darkStar} alt=""/>
            <div id='our_mission_dark_star_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default OurMissionDarkStar;