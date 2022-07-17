import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import * as styles from "./styles.module.scss";
import dashed from "../dashedImg/darkBlueBg.png";
import circle from './img/whiteCircle.png'

const WhiteCircle = () => {
    useEffect(() => {
        const white_circle_scene = document.getElementById("white_circle_scene");
        new Parallax(white_circle_scene);
    });
    return (
        <div className={styles.whiteCircle_container} >
            <img src={circle} alt=""/>
            <div id='white_circle_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default WhiteCircle;
