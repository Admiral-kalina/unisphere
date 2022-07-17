import React from 'react';
import ManHair from "./ManHair";
import ManFace from "./ManFace";
import * as styles from "./styles.module.scss";
import cube from "./img/cube.png";
import circle from "./img/circle.png";
import glasses from "./img/glasses.png";
import hairBg from "./img/hairBg.png";
import triangle from "./img/triangle.png";
import ear from "./img/ear.png";
import azureBg from "./img/azureBg.png";


const Man = () => {
    return (
        <div className={styles.manContainer}>
            <img src={cube} className={styles.manCube_block} alt=""/>
            <img src={circle} className={styles.manCircle_block} alt=""/>
            <img src={glasses} className={styles.manGlasses_block} alt=""/>
            <img src={hairBg} className={styles.manHairBg_block} alt=""/>
            <img src={triangle} className={styles.manTriangle_block} alt=""/>
            <img src={ear} className={styles.manEar_block} alt=""/>
            <img src={azureBg} className={styles.azureBg_block} alt=""/>
            <div className={styles.manHair_block}>
                <ManHair/>
            </div>
            <div className={styles.manFace_block}>
                <ManFace/>
            </div>

        </div>
    );
};

export default Man;