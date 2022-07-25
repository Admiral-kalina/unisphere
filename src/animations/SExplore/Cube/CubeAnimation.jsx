import React, { useEffect } from "react";
import * as styles from "./styles.module.scss";
import darkDashed from "../../../assets/animateImg/dashedImg/dakrDashedCube.png";
import whiteDashed from "../../../assets/animateImg/dashedImg/cubeWhiteDashed.png";
import Parallax from "parallax-js";
import dashed from "../../../assets/animateImg/dashedImg/azureBg.png";

const Cube = () => {
    useEffect(() => {
        const azure_bird_scene = document.getElementById("left_side_cube_scene");
        new Parallax(azure_bird_scene);
    });
    useEffect(() => {
        const azure_bird_scene = document.getElementById("top_side_cube_scene");
        new Parallax(azure_bird_scene);
    });
    

    return (
        <div id='cube-animation' className={styles.cube_animation_container}>
            <div className={styles.left_side}>
                <div id='left_side_cube_scene' className={styles.polygon}>
                    <img className={styles.dashed} data-depth={2} src={whiteDashed} alt=""/>
                </div>
            </div>
            <div className={styles.right_side}>
                <div className={styles.polygon}></div>
            </div>
            <div className={styles.top_side}>
                <div id='top_side_cube_scene' className={styles.polygon}>
                    <img className={styles.dashed} data-depth={2} src={darkDashed} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Cube