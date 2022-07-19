import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import dashed from "./dashedImg/darkBlueBg.png";
import triangle from "./img/triangle.png";
import * as styles from "./styles.module.scss";

const AboutTriangle = () => {

    useEffect(() => {
        const about_triangle_scene = document.getElementById("about_triangle_scene");
        new Parallax(about_triangle_scene);
    });
    return (
        <div className={styles.aboutTriangle_container} >
            <img src={triangle} alt=""/>
            <div id='about_triangle_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default AboutTriangle;



