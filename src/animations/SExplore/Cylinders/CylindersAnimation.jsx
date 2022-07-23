import React from "react";
import * as styles from "./styles.module.scss"

const CylindersAnimation = () => {
    return (
        <div className={styles.cylinder_container}>
            <div className={styles.cylinder_wrapper}>
                <div className={styles.cylinder1}></div>
            </div>
            <div className={styles.cylinder_wrapper}>
                <div className={styles.cylinder2}></div>
            </div>
            <div className={styles.cylinder_wrapper}>
                <div className={styles.cylinder3}></div>
            </div>
        </div>
    )
}
export default CylindersAnimation