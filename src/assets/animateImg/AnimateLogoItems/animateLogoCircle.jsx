import React,{useEffect} from 'react';
import circle from  "./img/circle.png"
import dashed from "../dashedImg/azureBg.png";
import * as styles from "./styles.module.scss";
import Parallax from "parallax-js";

const AnimateLogoCircle = () => {
    useEffect(() => {
        const animate_logo_circle_scene = document.getElementById("animate_logo_circle_scene");
        new Parallax(animate_logo_circle_scene);
    });
    return (
        <div>
            <div id='animate_logo_circle_scene'  className={styles.animateLogo_circle_container} >
                <img data-depth={2} src={circle} alt=""/>
                <div data-depth={3} className={styles.polygon}>
                    <img className={styles.dashed}  src={dashed} alt=""/>
                </div>
            </div></div>

    );
};

export default AnimateLogoCircle;

