import React from "react";
import * as styles from "./styles.module.scss";

const Shield = () => {

    return (
        <div className={styles.shield_container}>
            <div className={styles.top_side_wrapper}>
                <div className={styles.top_side}></div>
            </div>
            <div className={styles.left_side}></div>
            <div className={styles.right_side_wrapper}>
                <div className={styles.right_side}></div>
            </div>
        </div>
    )
}
export default Shield
