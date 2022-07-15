import React from 'react';
import SpaceMainFigure from "./SpaceMainFigure";
import SpaceCometFigure from "./SpaceCometFigure";
import SpaceCircle from "./SpaceCircle";
import ellipseBg from './img/ellipseBg.png'
import star from './img/star.png'
import * as styles from "./styles.module.scss";

const Space = () => {
    return (
        <div className={styles.space_container}>
            <img className={styles.ellipse_bg} src={ellipseBg} alt=""/>
            <img className={styles.star} src={star} alt=""/>
            <div className={styles.mainFigure_block}>
                <SpaceMainFigure/>
            </div>
            <div className={styles.cometFigure_block}>
                <SpaceCometFigure/>
            </div>
            <div className={styles.circle_block}>
                <SpaceCircle/>
            </div>
        </div>
    );
};

export default Space;