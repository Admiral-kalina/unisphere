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
        <div>
            <div onClick={handleClick}
                 className={`${styles.hamburger} ${isActive? styles.hamburgerActive : ''}` }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/*<div className={` ${style.modal} ${isActive? style.modalActive: ''}`}>*/}
            {/*    <div className={style.content}>*/}
            {/*        <CatalogBar/>*/}
            {/*        <img className={style.modalGif} src={modalDs} alt=""/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Hamburger;