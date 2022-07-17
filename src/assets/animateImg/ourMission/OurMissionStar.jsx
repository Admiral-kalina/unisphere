import React, {useEffect} from 'react';
import Parallax from "parallax-js";
import star from  "./img/star.png"
import rightStoreStar from "./img/rightStoreStarAnim.png"
import dashed from "../dashedImg/whiteBg.png";
import * as styles from "./styles.module.scss";

const OurMissionStar = () => {
    useEffect(() => {
        const our_mission_star_scene = document.getElementById("our_mission_star_scene");
        new Parallax(our_mission_star_scene);
    });
    return (
       <div className={styles.missionStar_block}>
            <img src={star} alt=''/>
           <div className={styles.rightStoreStar_container} >
               <img src={rightStoreStar} alt=""/>
               <div id='our_mission_star_scene' className={styles.polygon}>
                   <img className={styles.dashed} data-depth={2} src={dashed} alt=""/>
               </div>
           </div>
       </div>
    );
};

export default OurMissionStar;


