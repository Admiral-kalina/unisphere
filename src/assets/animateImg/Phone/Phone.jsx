import React,{useEffect} from "react";

import Parallax from 'parallax-js'
import * as styles from "./styles.module.scss";
import back from './img/back.svg'
import buttons from './img/buttons.svg'
import dashedFon from '../dashedImg/whiteBg.png'
import front from './img/front.svg'
import topBlock from './img/topBlock.svg'
import topBlockItems from './img/topBlockItems.svg'




const Phone = () => {
    console.log(styles)
    useEffect(() => {
        const phone_scene = document.getElementById("phone_scene");
        const phone_scene_bg = document.getElementById("phone_scene_bg");
        new Parallax(phone_scene);
        new Parallax(phone_scene_bg);
    });
    return (
       <div className={styles.phone_block}>
           <div className={styles.container}>
               <div id="phone_scene">
                   <img data-depth={0} className={styles.back} src={back} alt='back'/>
                   <img data-depth={2} className={styles.dashedFon} src={dashedFon} alt='dashedFon'/>
                   <img data-depth={0} className={styles.front} src={front} alt='front'/>
                   <div id='phone_scene_bg' className={styles.topBlock_container}>
                       <img data-depth={0} className={styles.topBlock} src={topBlock} alt='topBlock'></img>
                       <img data-depth={4} className={styles.topDashedBlock} src={dashedFon} alt='topDashedBlock'/>
                       <img data-depth={0} className={styles.topBlockItems} src={topBlockItems} alt='back'/>
                   </div>
               </div>
           </div>
           <img className={styles.buttons} src={buttons} alt="buttons"/>
       </div>
    );
};

export default Phone;

