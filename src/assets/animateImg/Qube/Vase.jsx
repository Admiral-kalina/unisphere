import React from 'react';
import {useEffect} from "react";
import Parallax from "parallax-js";
import * as styles from "./styles.module.scss";
import dashed from '../dashedImg/blueBg.png'
import vase from './img/vase.png'

const Vase = () => {

    useEffect(() => {
        const vase_scene = document.getElementById("vase_scene");
        new Parallax(vase_scene);
    });

    return (
        <div className={styles.vase_container} >
            <img src={vase} alt=""/>
            <div id='vase_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default Vase;


