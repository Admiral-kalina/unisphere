import React from 'react';
import {useState} from 'react';
//styles
import * as styles from "./styles.module.scss"
//images


const Hamburger = () => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(prev => !prev)
    }
    return (
        <div onClick={handleClick} className={styles.hamburgerBlock}>
            <div
                className={`${styles.hamburger} ${isActive? styles.hamburgerActive : ''}` }>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Hamburger;