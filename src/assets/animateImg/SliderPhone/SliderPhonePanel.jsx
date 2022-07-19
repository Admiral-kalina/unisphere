import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import dashed from "../dashedImg/blueBg.png";
import panel from "./img/panel.png";
import * as styles from "./styles.module.scss";

const SliderPhonePanel = () => {
    useEffect(() => {
        const slider_phone_panel_scene = document.getElementById("slider_phone_panel_scene");
        new Parallax(slider_phone_panel_scene);
    });
    return (
        <div className={styles.phonePanel_container} >
            <img src={panel} alt=""/>
            <div id='slider_phone_panel_scene' className={styles.polygon}>
                <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
            </div>
        </div>
    );
};

export default SliderPhonePanel;





