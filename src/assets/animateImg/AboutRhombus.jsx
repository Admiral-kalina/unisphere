import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import dashed from "./dashedImg/blueBg.png";
import rhombus from "./img/rhombus.png";
import * as styles from "./styles.module.scss";

const AboutRhombus = () => {
    useEffect(() => {
        const about_rhombus_scene = document.getElementById("about_rhombus_scene");
        new Parallax(about_rhombus_scene);
    });
    return (
        <div className={styles.aboutRhombus_container} >
            <img src={rhombus} alt=""/>
            <div id='about_rhombus_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default AboutRhombus;





