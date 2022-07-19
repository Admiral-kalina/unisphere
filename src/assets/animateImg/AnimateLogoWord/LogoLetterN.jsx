import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import letter from "./img/N.png"
import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";



const LogoLetterU = () => {
        useEffect(() => {
        const animate_letter_N_scene = document.getElementById("animate_letter_N_scene");
        new Parallax(animate_letter_N_scene);
    });
    return (
        <div className={styles.animateLetter_N} >
            <img src={letter} alt=""/>
            <div id='animate_letter_N_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default LogoLetterU;


