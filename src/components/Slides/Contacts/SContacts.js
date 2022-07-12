import React from 'react';
import * as styles from "./styles.module.scss"
import SliderMoreBtn from "../../UI/SliderMoreBtn";
import SocialLinks from "../../UI/SocialLinks";


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
                        {/*<div className={styles.linkIcons_block}>*/}
                        {/*    <a className={styles.glyph} href=""></a>*/}
                        {/*    <a className={styles.aye} href=""></a>*/}
                        {/*</div>*/}
                        <SocialLinks/>
                        <div className={styles.email_block}>
                            <p>GET THE LATEST NEWS</p>
                            <div>
                                <input placeholder='Enter e-mail' type="text"/>
                                <button></button>
                            </div>
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