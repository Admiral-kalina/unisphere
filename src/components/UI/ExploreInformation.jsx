import React from 'react';
import * as styles from "../../pages/explore/styles.module.scss";
import arrowImg from "../../images/arrow.png"

const ExploreInformation = ({title, subtitle}) => {
    return (
        <div className={styles.carousel_block}>
           <div className={styles.carousel_container}>
               <p className={styles.title}>{title}</p>
               <p className={styles.subtitles}>{subtitle}</p>
               <button className={styles.btnLearnMore}>Learn More</button>
           </div>
        </div>
    );
};

export default ExploreInformation;