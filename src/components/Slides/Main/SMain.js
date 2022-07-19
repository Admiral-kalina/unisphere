import React from 'react';
import * as styles from "./styles.module.scss"
import Unisp from "../../../assets/Unisp";
import AnimateLogoWord from "../../../assets/animateImg/AnimateLogoWord/AnimateLogoWord";
import AnimateLogoItems from "../../../assets/animateImg/AnimateLogoItems/AnimateLogoItems";

const SMain = () => {
    return (
        <div className={styles.start_container}>
           <div className={styles.logoText_block}>
               <AnimateLogoWord/>
               <h1 className='slider_title'>Welcome to the real world metaverse</h1>
               <p className='slider_subtitle'>Unisphere is a metaverse that complements reality. Bring virtual objects to the real world and place them at specific locations. Send 3D objects to each other and interact with them using your smartphone </p>
           </div>
            <div className={styles.logoItems_block}>
                <AnimateLogoItems/>
            </div>

        </div>
    );
};

export default SMain;