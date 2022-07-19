import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import circle from "./img/azureCircle.png";
import dashed from "../dashedImg/azureBg.png";
import * as styles from "./styles.module.scss";

const AboutHeaderAzureCircle = () => {
    useEffect(() => {
        const azure_circle_scene = document.getElementById("azure_circle_scene");
        new Parallax(azure_circle_scene);
    });
    return (
        <div className={styles.azureCircle_container} >
            <img src={circle} alt=""/>
            <div id='azure_circle_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default AboutHeaderAzureCircle;

