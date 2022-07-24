import React from 'react';
import AboutHeaderAzureCircle from "./AboutHeaderAzureCircle";
import AboutHeaderLogo from "./AboutHeaderLogo";
import * as styles from "./styles.module.scss";
import darkCircle from "./img/darkBlueCircle.png"

const AboutHeader = () => {
    return (
        <div className={styles.aboutHeader_container}>
            <div className={styles.darkCircle_block} >
                <img src={darkCircle} alt=""/>
            </div>
           <div className={styles.azureCircle_block}>
               <AboutHeaderAzureCircle/>
           </div>
            <div  className={styles.logo_block}>
                <AboutHeaderLogo/>
            </div>
        </div>
    );
};

export default AboutHeader;