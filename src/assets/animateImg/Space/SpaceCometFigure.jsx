import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import cometAnimateFigure from "./img/cometAnimate_back.png";
import cometBack from "./img/comet_back.png"
import dashed from "../dashedImg/darkBlueBg.png";
import * as styles from "./styles.module.scss";

const SpaceCometFigure = () => {
    useEffect(() => {
        const cometFigure_scene = document.getElementById("cometFigure_scene");
        new Parallax(cometFigure_scene);
    });
    return (
        <div className={styles.comet_block}>
            <img className={styles.comet_back} src={cometBack}/>
            <div className={styles.cometAnimateFigure_container} >
                <img src={cometAnimateFigure} alt=""/>
                <div id='cometFigure_scene' className={styles.polygon}>
                    <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
                </div>
            </div>
        </div>
    );
};
export default SpaceCometFigure;


