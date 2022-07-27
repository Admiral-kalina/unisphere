import React from 'react';
import * as styles from "./styles.module.scss"
import SliderMoreBtn from "../../UI/SliderMoreBtn";
import TimeAnimations from "../../../animations/STimeAnimation/TimeAnimations";

const STime = () => {
    return (
        <section className={styles.timeSlide_row}>
            <div className={styles.timeSlide_animation}>
                <TimeAnimations />
            </div>
            <div className={styles.timeSlide_information}>
                <p className='slider_title'>TIME</p>
                <p className='slider_subtitle'>Every object in the Unisphere has its life STime.It regulates the metaverse ecosystem, so it does not overflow with 3D object</p>
                <SliderMoreBtn>Learn More</SliderMoreBtn>
            </div>
        </section>
    );
};


export default STime;