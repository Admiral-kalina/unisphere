import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import * as styles from "./styles.module.scss";
import dashed from "../dashedImg/whiteBg.png";
import hair from './img/heir.png'

const ManHair = () => {
    useEffect(() => {
        const hair_scene = document.getElementById("hair_scene");
        new Parallax(hair_scene);
    });
    return (
        <div className={styles.manHair_container} >
            <img src={hair} alt=""/>
            <div id='hair_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default ManHair;
