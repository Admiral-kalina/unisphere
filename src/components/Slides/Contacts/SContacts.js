import React from 'react';
import * as styles from "./styles.module.scss"
import SliderMoreBtn from "../../UI/SliderMoreBtn";
import SocialLinks from "../../UI/SocialLinks";
import EmailBlock from "../../UI/EmailBlock";


const SContacts = () => {
    return (
        <section className={styles.contactsSlide}>
            <div className={styles.container}>
                <div className={styles.contactsSlide_row}>
                    <div className={styles.contactsSlide_information}>
                        <h3 className='slider_title'>CONTACTS</h3>
                        <p className='slider_subtitle'>We are glad to hear from you. Do not hesitate <br/> to contact us with any questions and suggestions.</p>
                        <SliderMoreBtn>Sent Request</SliderMoreBtn>
                    </div>
                    <div className={styles.contactsSlide_subscribe}>
                        <div>
                            <SocialLinks/>
                        </div>
                        <div className={styles.contactsEmail_block}>
                            <EmailBlock/>
                        </div>
                        <div className={styles.copyright_block}>
                            <p>AR Generation Sp. z o. o. © 2021 <a className={styles.generalIformation} href="">GDPR General information</a></p>
                        </div>
                        <div className={styles.privacy_block}>
                            <a href="">Privacy policy</a>
                            <a href="">Terms of use</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SContacts;