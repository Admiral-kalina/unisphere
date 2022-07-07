import React from 'react';
import * as styles from "../../pages/explore/styles.module.scss";
import arrowImg from "../../images/arrow.png"
import DetailsBtn from "../UI/DetailsBtn";

const ExploreInformation = ({title, subtitle}) => {
    return (
        <div className={styles.carousel_block}>
           <div className={styles.carousel_container}>
               <p className={styles.title}>{title}</p>
               <p className={styles.subtitles}>{subtitle}</p>
                <DetailsBtn>Learn More</DetailsBtn>
           </div>
        </div>
    );
};

export default ExploreInformation;