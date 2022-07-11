import React from 'react';
import * as styles from "./styles.module.scss"

const SInvestor = () => {
    return (

            <div className={styles.carousel_container}>
                <p className={styles.title}>FOR INVESTORS</p>
                <p className={styles.subtitles}>Here are additional information about the Unisphere and out pitch desk.Join us n investor.</p>
                <button className={styles.btnLearnMore}>More</button>
                <button>Get the Pitch Desk</button>
            </div>

    );
};

export default SInvestor;