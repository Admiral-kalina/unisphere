import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import * as styles from "./styles.module.scss"
import SEvents from "../../components/Slides/Events/SEvents";
import SInvestor from "../../components/Slides/Investor/SInvestor";
import App from "../../components/Slides/App/App";
import SContacts from "../../components/Slides/Contacts/SContacts";
import SMain from "../../components/Slides/Main/SMain";
import SExplore from "../../components/Slides/Explore/SExplore";
import STime from "../../components/Slides/Time/STime";
import SAbout from "../../components/Slides/About/SAbout";


const Explore = () => {
    return (
        <div>
            <Carousel>
                <div className={styles.carousel_block}>
                    <SMain/>
                </div>
                <div className={styles.carousel_block}>
                   <SExplore/>
                </div>
                <div className={styles.carousel_block}>
                    <STime/>
                </div>
                <div className={styles.carousel_block}>
                    <SAbout/>
                </div>
                <div className={styles.carousel_block}>
                    <SEvents/>
                </div>
                <div className={styles.carousel_block}>
                    <SInvestor/>
                </div>
                <div className={styles.carousel_block}>
                    <App/>
                </div>
                <div className={styles.carousel_block}>
                    <SContacts/>
                </div>
            </Carousel>
        </div>
    )
}
export default Explore


