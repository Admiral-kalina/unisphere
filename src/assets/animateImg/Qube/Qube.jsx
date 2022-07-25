import React from 'react';
import * as styles from "./styles.module.scss";
import Vase from "./Vase";
import BackSide from "./BackSide";
import groupPanel from './img/group_panel.png'
const Qube = () => {
    return (
        <div className={styles.qube_container}>
            <img className={styles.group_panel} src={groupPanel} alt=""/>
            <div className={styles.vase_component}>
                <Vase/>
            </div>
            <div className={styles.backSide_component}>
                <BackSide />
            </div>
        </div>
    );
};

export default Qube;