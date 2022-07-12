import React from 'react';
import * as styles from "./styles.module.scss"
import SliderMoreBtn from "../../UI/SliderMoreBtn";

const SInvestor = () => {
    return (
        <div className={styles.carousel_container}>
            <h3 className='slider_title'>FOR INVESTORS</h3>
            <p className='slider_subtitle'>Here are additional information about the Unisphere and out pitch desk.Join us n investor.</p>
            <SliderMoreBtn>More</SliderMoreBtn>
            <button>Get the Pitch Desk</button>
        </div>
    );
};

export default SInvestor;