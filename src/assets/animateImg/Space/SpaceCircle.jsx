import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import circle from "./img/circle.png";
import dashed from "../dashedImg/mainBlue.png";
import * as styles from "./styles.module.scss";

const SpaceCometFigure = () => {
    useEffect(() => {
        const circle_scene = document.getElementById("circle_scene");
        new Parallax(circle_scene);
    });

    return (
        <div className={styles.circle_container} >
            <img src={circle} alt=""/>
            <div id='circle_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};
export default SpaceCometFigure;


