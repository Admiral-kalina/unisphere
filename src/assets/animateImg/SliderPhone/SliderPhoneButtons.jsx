import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import dashed from "../dashedImg/blueBg.png";
import button from "./img/button.png";
import * as styles from "./styles.module.scss";

const SliderPhonePanel = () => {
    useEffect(() => {
        const slider_phone_top_button_scene = document.getElementById("slider_phone_top_button_scene");
        new Parallax(slider_phone_top_button_scene);
        const slider_phone_bottom_button_scene = document.getElementById("slider_phone_bottom_button_scene");
        new Parallax(slider_phone_bottom_button_scene);
    });
    return (
       <div className={styles.phoneButtons_container}>
           <div className={styles.top_button} >
               <img src={button} alt=""/>
               <div id='slider_phone_top_button_scene' className={styles.polygon}>
                   <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
               </div>
           </div>
           <div className={styles.bottom_button} >
               <img src={button} alt=""/>
               <div id='slider_phone_bottom_button_scene' className={styles.polygon}>
                   <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
               </div>
           </div>
       </div>
    );
};

export default SliderPhonePanel;





