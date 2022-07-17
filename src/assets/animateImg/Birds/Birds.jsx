import React from 'react';
import WhiteBird from "./WhiteBird";
import AzureBird from "./AzureBird";
import WhiteCircle from "./WhiteCircle";
import * as styles from "./styles.module.scss";
import fonBg from "./img/fonBg.png"

const Birds = () => {

    return (
        <div className={styles.birds_container} >
            <img className={styles.fonBg_bird_block} src={fonBg} alt=""/>
           <div className={styles.azureBird_block}>
               <AzureBird/>
           </div>
            <div className={styles.whiteBird_block}>
                <WhiteBird/>
            </div>
            <div className={styles.whiteCircle_bird_block}>
                <WhiteCircle/>
            </div>
        </div>
    );
};

export default Birds;

