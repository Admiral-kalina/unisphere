import React from 'react';
import * as styles from "./styles.module.scss"
import SliderMoreBtn from "../../UI/SliderMoreBtn";

const SExplore = () => {
    return (
        <section className={styles.exploreSlide_row}>
            <div className={styles.exploreSlide_animation}>

            </div>
            <div className={styles.exploreSlide_information}>
                <h3 className='slider_title'>EXPLORE</h3>
                <p className='slider_subtitle'>Meet the Unisphere metaverse here. Find out what is how to apply and what to do in it.</p>
                <SliderMoreBtn >Learn More</SliderMoreBtn>
            </div>
        </section>
    );
};



export default SExplore;
