import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import rhombus from "./img/rhombus.png"

import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";



const TimeHeaderRhombus = () => {

    useEffect(() => {
        const time_rhombus_scene = document.getElementById("time_rhombus_scene");
        new Parallax(time_rhombus_scene);
    });

    return (
        <div className={styles.timeRhombus_container} >
            <img src={rhombus} alt=""/>
            <div id='time_rhombus_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};
export default TimeHeaderRhombus;