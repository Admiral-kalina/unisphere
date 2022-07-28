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
import head from "../../images/About/icons/head.png";
import earth from "../../images/About/icons/earth.png";
import health from "../../images/About/icons/health.png";
import lamp from "../../images/About/icons/lamp.png";
import move from "../../images/About/icons/move.png";
import humanity from "../../images/About/icons/humanity.png";
import security from "../../images/About/icons/security.png";
import sociable from "../../images/About/icons/sociable.png";
import lineBg from "../../images/About/lineBg.png"
import AboutTicker from "../../components/AboutTicker/AboutTicker";
import headerBg from "../../images/About/headerBg.png"

const About = () => {
    return(
        <div className={parentStyles.content}>
            <section className={parentStyles.preview}>
                <div className={parentStyles.bigContainer}>
                    <div className={parentStyles.preview__row}>
                        <div className={parentStyles.preview__animations}>
                            <img className={parentStyles.headerBg_about} src={headerBg} alt=""/>
                            <AboutHeader/>
                        </div>
                        <div className={parentStyles.preview__informations}>
                            <h2 className={parentStyles.preview__title}>THIS IS UNISPHERE</h2>
                            <p className={parentStyles.preview__subtitle}>We created the Unisphere metaverse and made it free from the physical reality limits.</p>
                        </div>
                    </div>
                    <div className={parentStyles.preview__scroll}>
                        <h5>SCROLL TO EXPLORE</h5>
                        <p className={parentStyles.arrow}></p>
                    </div>
                </div>
            </section>
            <section className={styles.ourInformation}>
                <img className={styles.ourInformation_lineBg} src={lineBg} alt=""/>
                <div className={styles.ourInformation_row}>
                    <div className={styles.ourInformation_philosophy}>
                        <p className={styles.ourInformation_title}>Our philosophy</p>
                        <p className={styles.ourInformation_subtitle}>Our philosophy is to support people's freedom aspirations in any manifestation.</p>
                    </div>
                    <div className={styles.ourInformation_philosophy__animation}>
                        <Birds/>
                    </div>
                    <div className={styles.ourInformation_mission__animation}>
                        <OurMission/>
                    </div>
                    <div className={styles.ourInformation_mission}>
                        <p className={styles.ourInformation_title}>Our mission </p>
                        <p className={styles.ourInformation_subtitle}>Our mission is to create a free space without borders and regulations of the physical world.</p>
                    </div>
                    <div className={styles.ourInformation_metahumans}>
                        <p className={styles.ourInformation_title}>metahumans</p>
                        <p className={styles.ourInformation_subtitle}>The Unisphere residents are called metahumans. These are people who feel free and strive to remove the limitations that exist in physical reality</p>
                    </div>
                    <div className={styles.ourInformation_metahumans__animation}>
                        <Man/>
                    </div>
                </div>
            </section>
            <section className={styles.ourValues}>
                <div className={parentStyles.bigContainer}>
                    <div className={styles.ourValues_block}>
                        <div className={styles.ourValues_triangle}>
                            <AboutTriangle/>
                        </div>
                        <div className={styles.ourValues_rhombus}>
                            <AboutRhombus/>
                        </div>
                        <h3 className={styles.ourValues_title}>Our values are:</h3>
                        <div className={styles.ourValues_row}>
                            <div id={styles.ourValues_grid__health} className={styles.ourValues_column}>
                                <img src={health} alt="health"/>
                                <div className={styles.ourValues_column__text}>
                                    <p>Human health </p>
                                    <p>Our space is free from factors that negatively affect human health.</p>
                                </div>
                            </div>
                            <div id={styles.ourValues_grid__head} className={styles.ourValues_column}>
                                <img src={head} alt="head"/>
                                <div className={styles.ourValues_column__text}>
                                    <p>People's comfort </p>
                                    <p>The Unisphere space is free from factors that worsen physical and mental comfort.</p>
                                </div>
                            </div>

                            <div id={styles.ourValues_grid__earth} className={styles.ourValues_column}>
                                <img src={earth} alt="earth"/>
                                <div className={styles.ourValues_column__text}>
                                    <p>Environmental friendliness</p>
                                    <p>We create and develop a space free from harmful industries. It uses only virtual objects that do not need material resources to be created.</p>
                                </div>
                            </div>
                            <div id={styles.ourValues_grid__move} className={styles.ourValues_column}>
                                <img src={move} alt="move"/>
                                <div className={styles.ourValues_column__text}>
                                    <p>Human nature </p>
                                    <p>A person can build a balance between mind and body in Unisphere. He does not need to give up physical activity in favor of technology.</p>
                                </div>
                            </div>
                            <div id={styles.ourValues_grid__sociable} className={styles.ourValues_column}>
                                <img src={sociable} alt="sociable"/>
                                <div className={styles.ourValues_column__text}>
                                    <p>Social connections</p>
                                    <p>The Unisphere space is saturated with full-fledged physical contacts between people, simplified with augmented reality.</p>
                                </div>
                            </div>
                            <div id={styles.ourValues_grid__security} className={styles.ourValues_column}>
                                <img src={security} alt="security"/>
                                <div className={styles.ourValues_column__text}>
                                    <p>Security and privacy</p>
                                    <p>We value freedom, so we do not collect or store users' personal data.</p>
                                </div>
                            </div>
                            <div id={styles.ourValues_grid__lamp} className={styles.ourValues_column}>
                                <img src={lamp} alt="lamp"/>
                                <div className={styles.ourValues_column__text}>
                                    <p>Auspicious future </p>
                                    <p>We are creating a space that contribute the development of technologies useful for humanity.</p>
                                </div>
                            </div>
                            <div id={styles.ourValues_grid__humanity} className={styles.ourValues_column}>
                                <img src={humanity} alt="humanity"/>
                                <div className={styles.ourValues_column__text}>
                                    <p>Development of humanity</p>
                                    <p>The Unisphere promotes the initiatives and acts as a growth driver for people, businesses, cities and countries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.personality}>
                <p className={styles.personality_title}>The Unisphere personality is:</p>
                <AboutTicker/>
                <p className={styles.personality_moreText}>Learn more about Unisphere in our <a href="">Brand Guidlines</a>.</p>
            </section>
            <Footer/>
        </div>
        // <div>
        //     <div className={styles.page}></div>
        //     <AboutHeader/>
        //
        //
        //
        //
        //
        //
        // </div>
    )
}
export default About