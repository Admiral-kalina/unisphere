import React, {useEffect} from 'react';
import AnimateLogoCircle from "./animateLogoCircle";
import AnimateLogoRhombus from "./AnimateLogoRhombus";
import AnimateLogoTriangle from "./AnimateLogoTriangle";
import * as styles from "./styles.module.scss";
import Parallax from "parallax-js";


const AnimateLogoItems = () => {

    useEffect(() => {
        const animate_logo_items_scene = document.getElementById("animate_logo_items_scene");
        new Parallax(animate_logo_items_scene);
    });

    return (
        <div id='animate_logo_items_scene' data-depth={20}>
        <div  className={styles.logoItems_container}>
               <div className={styles.logoItems_circle_block}>
                   <AnimateLogoCircle />
               </div>
               <div className={styles.logoItems_rhombus_block}>
                   <AnimateLogoRhombus/>
               </div>
               <div className={styles.logoItems_triangle_block}>
                   <AnimateLogoTriangle/>
               </div>
           </div>
        </div>
    );
};

export default AnimateLogoItems;