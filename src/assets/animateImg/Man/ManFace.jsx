import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import * as styles from "./styles.module.scss";
import dashed from "../dashedImg/blueBg.png";
import face from './img/face.png'

const ManFace = () => {
    useEffect(() => {
        const face_scene = document.getElementById("face_scene");
        new Parallax(face_scene);
    });
    return (
        <div className={styles.manFace_container} >
            <img src={face} alt=""/>
            <div id='face_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default ManFace;
