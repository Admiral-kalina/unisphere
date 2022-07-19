import React,{useEffect} from 'react';
import rhombus from  "./img/rhombus.png"
import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";
import Parallax from "parallax-js";
import circle from "./img/circle.png";

const AnimateLogoRhombus = () => {
    useEffect(() => {
        const animate_logo_rhombus_container_scene = document.getElementById("animate_logo_rhombus_container_scene");
        new Parallax(animate_logo_rhombus_container_scene);
        const animate_logo_rhombus_scene = document.getElementById("animate_logo_rhombus_scene");
        new Parallax(animate_logo_rhombus_scene);
    });
    return (
       <div id='animate_logo_rhombus_container_scene'>
           <img src={rhombus} data-depth={2} alt=""/>
           <div id='animate_logo_rhombus_scene' data-depth={2} className={styles.animateLogo_rhombus_container} >
               <div data-depth={3} className={styles.polygon}>
                   <img className={styles.dashed}  src={dashed} alt=""/>
               </div>
           </div>
       </div>
    );
};

export default AnimateLogoRhombus;

