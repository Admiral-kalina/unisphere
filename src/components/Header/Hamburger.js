import React from 'react';
import {useState} from 'react';
//styles
import * as styles from "./styles.module.scss"
//images


const Hamburger = () => {

    return (
        <div className={styles.hamburgerBlock}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Hamburger;