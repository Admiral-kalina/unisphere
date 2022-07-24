import React, {useEffect} from "react";
import dashed from "../../../assets/animateImg/dashedImg/azureBg.png";
import Parallax from "parallax-js";

import * as styles from "./styles.module.scss"


const CylindersAnimation = () => {
    useEffect(() => {
        const azure_bird_scene = document.getElementById("first_cylinder_scene");
        new Parallax(azure_bird_scene);
    });
    useEffect(() => {
        const azure_bird_scene = document.getElementById("second_cylinder_scene");
        new Parallax(azure_bird_scene);
    });
    useEffect(() => {
        const azure_bird_scene = document.getElementById("third_cylinder_scene");
        new Parallax(azure_bird_scene);
    });
    return (
        <div className={styles.cylinder_container}>
            <div className={styles.cylinder_wrapper}>
                <div className={styles.cylinder1}>
                    <div id="first_cylinder_scene" className={styles.polygon}>
                        <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.cylinder_wrapper}>
                <div className={styles.cylinder2}>
                    <div id="second_cylinder_scene" className={styles.polygon}>
                        <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.cylinder_wrapper}>
                <div className={styles.cylinder3}>
                    <div id="third_cylinder_scene" className={styles.polygon}>
                        <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CylindersAnimation