import React from 'react';
import TimeHeaderBlueBallon from "./TimeHeaderBlueBallon";
import TimeHeaderDarkBalloon from "./TimeHeaderDarkBalloon";
import TimeHeaderRhombus from "./TimeHeaderRhombus";
import * as styles from "./styles.module.scss";


const TimeHeader = () => {
    return (
        <div className={styles.timeHeader_container}>
            <div className={styles.blueBallon_block}>
                <TimeHeaderBlueBallon/>
            </div>
            <div className={styles.darkBallon_block}>
                <TimeHeaderDarkBalloon/>
            </div>
            <div className={styles.rhombus_block}>
                <TimeHeaderRhombus/>
            </div>
        </div>
    );
};

export default TimeHeader;