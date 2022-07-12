import React from 'react';
import * as styles from "./styles.module.scss"
import SliderMoreBtn from "../../UI/SliderMoreBtn";

const SAbout = () => {
    return (
        <section className={styles.aboutSlide_row}>
            <div className={styles.aboutSlide_animation}>

            </div>
            <div className={styles.aboutSlide_information}>
                <h3 className='slider_title'>ABOUT</h3>
                <p className='slider_subtitle'>The world without limits. It's about the Unisphere. Discover the metaverse identity through Philosophy, Misson, Values and Brand Guidelines. </p>
                <SliderMoreBtn>Learn More</SliderMoreBtn>
            </div>
        </section>
    );
};

export default SAbout;

