import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import * as styles from "./styles.module.scss";
import dashed from "../dashedImg/blueBg.png";
import whiteBird from './img/whiteBird.png'

const WhiteBird = () => {
    useEffect(() => {
        const white_bird_scene = document.getElementById("white_bird_scene");
        new Parallax(white_bird_scene);
    });
    return (
        <div className={styles.whiteBird_container} >
            <img src={whiteBird} alt=""/>
            <div id='white_bird_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default WhiteBird;
