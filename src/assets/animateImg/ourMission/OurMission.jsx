import React from 'react';
import OurMissionStar from "./OurMissionStar";
import OurMissionDarkStar from "./OurMissionDarkStar";
import OurMissionCurvedLine from "./ourMissionCurvedLine";
import OurMissionCircle from "./OurMIssionCircle";
import puzzle from "./img/pazellFigure.png"
import * as styles from "./styles.module.scss";

const OurMission = () => {
    return (
        <div className={styles.ourMission_container}>
            <img className={styles.ourMission_puzzleFigure_block} src={puzzle} alt=""/>
            <div className={styles.ourMission_star_block}>
                <OurMissionStar/>
            </div>
            <div className={styles.ourMission_darkStar_block}>
                <OurMissionDarkStar/>
            </div>
            <div className={styles.ourMission_circle_block}>
                <OurMissionCircle/>
            </div>
            <div className={styles.ourMission_curvedLine_block}>
                <OurMissionCurvedLine/>
            </div>
        </div>
    );
};

export default OurMission;