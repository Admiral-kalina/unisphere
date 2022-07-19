import React,{useEffect} from 'react';
import rhombus from  "./img/rhombus.png"
import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";
import Parallax from "parallax-js";

const AnimateLogoRhombus = () => {
    useEffect(() => {
        const animate_logo_rhombus_scene = document.getElementById("animate_logo_rhombus_scene");
        new Parallax(animate_logo_rhombus_scene);
    });
    return (
        <div className={styles.animateLogo_rhombus_container} >
            <img src={rhombus} alt=""/>
            <div id='animate_logo_rhombus_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default AnimateLogoRhombus;

