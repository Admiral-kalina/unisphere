import React from 'react';
import * as styles from "./styles.module.scss"
import SliderMoreBtn from "../../UI/SliderMoreBtn";
import SliderPhone from "../../../assets/animateImg/SliderPhone/SliderPhone";
import AppleBtn from "../../UI/AppleBtn";
import photo from "../../../images/Slide/Investor.png"
const SInvestor = () => {
    return (
        <div className={styles.carousel_container}>
            <div className={styles.row}>
                <div className={styles.column_left}>
                    <h3 className='slider_title'>FOR INVESTORS</h3>
                    <p>Here are additional information about the Unisphere and out pitch desk. Join us n investor.</p>
                    <SliderMoreBtn>More</SliderMoreBtn>
                    <a href="" className={styles.pitchDesk_btn}>Get the Pitch Desk</a>
                </div>
                <div className={styles.column_right}>
                    <div className={styles.right_row}>
                        <img className={styles.animation} src={photo} alt=""/>
                        <p className={styles.grey_linkText}>* based on 3G cellular technology coverage worldwide <a href="">www.statista.com</a></p>
                        <div className={styles.userStatistic}>
                            <p className={styles.statisticCount}>16 327</p>
                            <p>Users on may 2022</p>
                        </div>
                        <div className={styles.teamStatistic}>
                            <p className={styles.statisticCount}>12</p>
                            <p>Team members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SInvestor;

