import React, {useEffect} from 'react';

import Parallax from "parallax-js";
import * as styles from "./styles.module.scss";
import mainFigure from "./img/mainFigure.png";
import dashed from "../dashedImg/blueBg.png";

const SpaceMainFigure = () => {
    useEffect(() => {
        const mainFigure_scene = document.getElementById("mainFigure_scene");
        new Parallax(mainFigure_scene);
    });

    return (
        <div className={styles.mainFigure_container} >
            <img src={mainFigure} alt=""/>
            <div id='mainFigure_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default SpaceMainFigure;