import React from "react";

import * as styles from "./styles.module.scss";
import Cube from "../../../animations/SExplore/Cube/CubeAnimation";
import CylindersAnimation from "../../../animations/SExplore/Cylinders/CylindersAnimation";
import Shield from "../../../animations/SExplore/Shield/Shield.jxs";
import Lens from "../../../animations/SExplore/Lens/Lens";


const ExploreAnimations = () => {

    return (
        <div className={styles.explore_animation_container}>
            <div className={styles.cube_wrapper}>
                <Cube/>
            </div>
            <div className={styles.lens_wrapper}>
                <Lens/>
            </div>
            <div className={styles.cylinder_wrapper}>
                <CylindersAnimation/>
            </div>
            <div className={styles.shield_wrapper}>
                <Shield/>
            </div>
        </div>
    )
}
export default ExploreAnimations