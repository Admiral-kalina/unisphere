import React,{useEffect} from 'react';
import circle from  "./img/circle.png"
import dashed from "../dashedImg/azureBg.png";
import * as styles from "./styles.module.scss";
import Parallax from "parallax-js";

const OurMissionCircle = () => {
    useEffect(() => {
        const our_circle_scene = document.getElementById("our_circle_scene");
        new Parallax(our_circle_scene);
    });
    return (
        <div className={styles.ourCircle_container} >
            <img src={circle} alt=""/>
            <div id='our_circle_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default OurMissionCircle;