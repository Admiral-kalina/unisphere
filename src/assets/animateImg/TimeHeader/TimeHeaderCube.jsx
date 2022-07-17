import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import triangle from "./img/triangle.png"
import cubeBg from "./img/cubeBg.png"
import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";



const TimeHeaderCube = () => {

    useEffect(() => {
        const time_cube_scene = document.getElementById("time_cube_scene");
        new Parallax(time_cube_scene);
    });

    return (
        <div className={styles.timeCube}>
            <img className={styles.cubeBg} src={cubeBg} alt=""/>
            <img className={styles.rotateTriangle} src={triangle} alt=""/>
            <div className={styles.timeTriangle_container} >
                <img src={triangle} alt=""/>
                <div id='time_cube_scene' className={styles.polygon}>
                    <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
                </div>
            </div>
        </div>
      
    );
};
export default TimeHeaderCube;