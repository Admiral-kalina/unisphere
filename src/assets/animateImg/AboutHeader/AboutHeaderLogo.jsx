import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import * as styles from "./styles.module.scss";
import dashed from "../dashedImg/whiteBg.png";
import logo from './img/logo.png'
import line from "./img/line.png"

const AboutHeaderLogo = () => {
    useEffect(() => {
        const about_logo_scene = document.getElementById("about_logo_scene");
        new Parallax(about_logo_scene);
        const about_logo_line_scene = document.getElementById("about_logo_line_scene");
        new Parallax(about_logo_line_scene);
    });
    return (
        <div className={styles.aboutLogo_container}>
            <div className={styles.aboutLogo_circle} >
                <img src={logo} alt=""/>
                <div id='about_logo_scene' className={styles.polygon}>
                    <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
                </div>
            </div>
            <div className={styles.aboutLogo_line} >
                <img src={line} alt=""/>
                <div id='about_logo_line_scene' className={styles.polygon}>
                    <img className={styles.dashed} data-depth={3} src={dashed} alt=""/>
                </div>
            </div>
        </div>

    );
};

export default AboutHeaderLogo;



