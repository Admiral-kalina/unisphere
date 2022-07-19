import React from "react";
import * as styles from "./styles.module.scss";
import * as parentStyles from "../styles.module.scss";
import Footer from "../../components/Footer/Footer";
import Birds from "../../assets/animateImg/Birds/Birds";
import Man from "../../assets/animateImg/Man/Man";
import OurMission from "../../assets/animateImg/ourMission/OurMission";
import ManFace from "../../assets/animateImg/Man/ManFace";
import AboutHeader from "../../assets/animateImg/AboutHeader/AboutHeader";
import AboutTriangle from "../../assets/animateImg/AboutTriangle";
import AboutRhombus from "../../assets/animateImg/AboutRhombus";
import TimeHeader from "../../assets/animateImg/TimeHeader/TimeHeader";

const About = () => {
    return(
        <div className={parentStyles.content}>
            <section className={parentStyles.preview}>
                <div className={parentStyles.preview__row}>
                    <div className={parentStyles.preview__animations}>
                       <AboutHeader/>
                    </div>
                    <div className={parentStyles.preview__informations}>
                        <h2>THIS IS UNISPHERE</h2>
                        <p>We created the Unisphere metaverse and made it free from the physical reality limits.</p>
                    </div>
                </div>
                <div className={parentStyles.preview__scroll}>
                    <h5>SCROLL TO EXPLORE</h5>
                    <p className={parentStyles.arrow}></p>
                </div>
            </section>
            <section className={styles.ourInformation}>
                <div className={styles.ourInformation_row}>
                    <div className={styles.ourInformation_philosophy}>

                    </div>
                    <div className={styles.ourInformation_philosophy__animation}>
                        <Birds/>
                    </div>
                    <div className={styles.ourInformation_mission__animation}>
                        <OurMission/>
                    </div>
                    <div className={styles.ourInformation_mission}>

                    </div>
                    <div className={styles.ourInformation_metahumans}>

                    </div>
                    <div className={styles.ourInformation_metahumans__animation}>
                        <Man/>
                    </div>
                </div>
            </section>
        </div>
        // <div>
        //     <div className={styles.page}></div>
        //     <AboutHeader/>
        //
        //
        //
        //     <AboutTriangle/>
        //     <AboutRhombus/>
        //     <Footer/>
        // </div>
    )
}
export default About