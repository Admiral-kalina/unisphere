import React from 'react';
import * as styles from "./styles.module.scss"

const SAbout = () => {
    return (
        <div className={styles.carousel_block}>
            <div className={styles.carousel_container}>
                <p className={styles.title}>ABOUT</p>
                <p className={styles.subtitles}>The world without limits. It\'s about the Unisphere. Discover the metaverse identity through Philosophy, Misson, Values and Brand Guidelines.</p>
                <button className={styles.btnLearnMore}>More</button>
            </div>
        </div>
    );
};

export default SAbout;