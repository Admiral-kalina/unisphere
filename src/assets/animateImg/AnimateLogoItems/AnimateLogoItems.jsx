import React from 'react';
import AnimateLogoCircle from "./animateLogoCircle";
import AnimateLogoRhombus from "./AnimateLogoRhombus";
import AnimateLogoTriangle from "./AnimateLogoTriangle";
import * as styles from "./styles.module.scss";

const AnimateLogoItems = () => {
    return (
        <div className={styles.logoItems_container}>
            <div className={styles.logoItems_circle_block}>
                <AnimateLogoCircle/>
            </div>
            <div className={styles.logoItems_rhombus_block}>
                <AnimateLogoRhombus/>
            </div>
            <div className={styles.logoItems_triangle_block}>
                <AnimateLogoTriangle/>
            </div>
        </div>
    );
};

export default AnimateLogoItems;