import React,{useEffect} from 'react';
import triangle from  "./img/triangle.png"
import dashed from "../dashedImg/darkBlueBg.png";
import * as styles from "./styles.module.scss";
import Parallax from "parallax-js";

const AnimateLogoTriangle = () => {
         useEffect(() => {
         const animate_logo_triangle_scene = document.getElementById("animate_logo_triangle_scene");
         new Parallax(animate_logo_triangle_scene);
    });
    return (
        <div className={styles.animateLogo_triangle_container} >
            <img src={triangle} alt=""/>
            <div id='animate_logo_triangle_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default AnimateLogoTriangle;

