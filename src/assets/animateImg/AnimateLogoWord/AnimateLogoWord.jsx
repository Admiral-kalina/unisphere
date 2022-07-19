import React from 'react';
import LogoLetterU from "./LogoLetterU";
import LogoLetterN from "./LogoLetterN";
import LogoLetterS from "./LogoLetterS";
import LogoLetterP from "./LogoLetterP";
import LogoLetterR from "./LogoLetterR";
import LogoLetterE from "./LogoLetterE";
import LogoLetterH from "./LogoLetterH";
import LogoLetterI from "./LogoLetterI";
import * as styles from "./styles.module.scss";
import LogoLastletterE from "./LogoLastletterE";

const AnimateLogoWord = () => {
    return (
        <div className={styles.word_container}>
            <div className={styles.letterU_container}>
                <LogoLetterU/>
            </div>
            <div className={styles.letterN_container}>
                <LogoLetterN/>
            </div>
            <div className={styles.letterI_container}>
                <LogoLetterI/>
            </div>
            <div className={styles.letterS_container}>
                <LogoLetterS/>
            </div>
            <div className={styles.letterP_container}>
                <LogoLetterP/>
            </div>
            <div className={styles.letterH_container}>
                <LogoLetterH/>
            </div>
            <div className={styles.letterE_container}>
                <LogoLetterE/>
            </div>
            <div className={styles.letterR_container}>
                <LogoLetterR/>
            </div>
            <div className={styles.LastLetterE_container}>
                <LogoLastletterE/>
            </div>

        </div>
    );
};

export default AnimateLogoWord;