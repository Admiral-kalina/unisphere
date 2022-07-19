import React,{useEffect} from 'react';
import triangle from  "./img/triangle.png"
import dashed from "../dashedImg/darkBlueBg.png";
import * as styles from "./styles.module.scss";
import Parallax from "parallax-js";
import circle from "./img/circle.png";

const AnimateLogoTriangle = () => {
         useEffect(() => {
         const animate_logo_triangle_scene = document.getElementById("animate_logo_triangle_scene");
         new Parallax(animate_logo_triangle_scene);
         const animate_logo_triangle_container_scene = document.getElementById("animate_logo_triangle_container_scene");
         new Parallax(animate_logo_triangle_container_scene);
    });
    return (
        <div id='animate_logo_triangle_container_scene'>
            <div id='animate_logo_triangle_scene' data-depth={2} className={styles.animateLogo_triangle_container} >
                <img src={triangle} alt=""/>
                <div data-depth={3} className={styles.polygon}>
                    <img className={styles.dashed} src={dashed} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default AnimateLogoTriangle;

