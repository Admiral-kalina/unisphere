import React from 'react';
import * as styles from "./styles.module.scss"
import SliderBtn from "../../UI/SliderBtn";


const SContacts = () => {
    return (
        <div className={styles.carousel_container}>
            <div className={styles.carousel_row}>
                <div className={styles.informationsBlock}>
                    <p className={styles.title}>CONTACTS</p>
                    <p className={styles.subtitles}>We are glad to hear from you. Do not hesitate to contact us with any questions and suggestions.</p>
                    <SliderBtn className={styles.btnLearnMore}>Sent Request</SliderBtn>
                </div>
                <div className={styles.subscribBlock}>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SContacts;