import React from "react";
import * as styles from "./styles.module.scss";

const Lens = () => {

    return (
        <div className={styles.lens_wrapper}>
            <div className={styles.line}></div>
            <div className={styles.magnifying_glass}></div>
            <div className={styles.overlay_wrapper}>
                <div className={styles.overlay}></div>
            </div>

        </div>
    )
}
export default Lens

