import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import blueBalloon from "./img/blueBalloon.png"
import dashed from "../dashedImg/azureBg.png";
import * as styles from "./styles.module.scss";



const ExploreHeaderBlueBalloon = () => {

    useEffect(() => {
        const explore_blue_balloon_scene = document.getElementById("explore_blue_balloon_scene");
        new Parallax(explore_blue_balloon_scene);
    });

    return (
        <div className={styles.exploreBlueBalloon_container} >
            <img src={blueBalloon} alt=""/>
            <div id='explore_blue_balloon_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};
export default ExploreHeaderBlueBalloon;