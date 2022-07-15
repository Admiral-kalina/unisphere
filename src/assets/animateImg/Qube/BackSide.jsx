import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import * as styles from "./styles.module.scss";
import grayBlock from "./img/gray_block.png";
import dashed from "../dashedImg/azureBg.png";
import panel from './img/back_panel.png'
const BackSide = () => {

    useEffect(() => {
        const back_side = document.getElementById("back_side");
        new Parallax(back_side);
    });
    return (
        <div className={styles.backSide_container} >
            <img src={grayBlock} alt=""/>
            <div id='back_side' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
                <img className={styles.panel}  src={panel} alt=""/>
            </div>
        </div>
    );
};

export default BackSide;