import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import curvedLine from  "./img/curvedLine.png"
import dashed from "../dashedImg/blueBg.png";
import * as styles from "./styles.module.scss";

const OurMissionStar = () => {
    useEffect(() => {
        const our_mission_curved_line_scene = document.getElementById("our_mission_curved_line_scene");
        new Parallax(our_mission_curved_line_scene);
    });
    return (
        <div className={styles.curvedLine_container} >
            <img src={curvedLine} alt=""/>
            <div id='our_mission_curved_line_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default OurMissionStar;


