import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import * as styles from "./styles.module.scss";
import dashed from "../dashedImg/azureBg.png";
import azureBird from './img/azureBird.png'

const AzureBird = () => {
    useEffect(() => {
        const azure_bird_scene = document.getElementById("azure_bird_scene");
        new Parallax(azure_bird_scene);
    });
    return (
        <div className={styles.azureBird_container} >
            <img src={azureBird} alt=""/>
            <div id='azure_bird_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default AzureBird;
