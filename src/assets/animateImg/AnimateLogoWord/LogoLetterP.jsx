import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import letter from "./img/P.png"
import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";



const LogoLetterP = () => {
        useEffect(() => {
        const animate_letter_P_scene = document.getElementById("animate_letter_P_scene");
        new Parallax(animate_letter_P_scene);
    });
    return (
        <div className={styles.animateLetter_P} >
            <img src={letter} alt=""/>
            <div id='animate_letter_P_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default LogoLetterP;


