import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import triangle from "./img/triangle.png"
import cubeBg from "./img/cubeBg.png"
import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";



const ExploreHeaderCube = () => {

    useEffect(() => {
        const explore_cube_scene = document.getElementById("explore_cube_scene");
        new Parallax(explore_cube_scene);
    });

    return (
        <div className={styles.exploreCube}>
            <img className={styles.cubeBg} src={cubeBg} alt=""/>
            <img className={styles.rotateTriangle} src={triangle} alt=""/>
            <div className={styles.exploreTriangle_container} >
                <img src={triangle} alt=""/>
                <div id='explore_cube_scene' className={styles.polygon}>
                    <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
                </div>
            </div>
        </div>
      
    );
};
export default ExploreHeaderCube;