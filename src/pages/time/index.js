import React from "react";
import * as styles from "./styles.module.scss";
import * as parentStyles from "../styles.module.scss";
import Group from "../../images/Time/Group.png"
import Footer from "../../components/Footer/Footer";
import Vase from "../../assets/animateImg/Qube/Vase";
import Qube from "../../assets/animateImg/Qube/Qube";
import Space from "../../assets/animateImg/Space/Space";
import Phone from "../../assets/animateImg/Phone/Phone";
import TimeHeader from "../../assets/animateImg/TimeHeader/TimeHeader";
import Accordion from "../../components/Accordion/Accordion";
import AppleBtn from "../../components/UI/AppleBtn";
import GoogleBtn from "../../components/UI/GoogleBtn";
import headerBg from "../../images/Time/headerBg.png";

const Time = () => {
    return(
            <div className={parentStyles.content}>
                <section className={parentStyles.preview}>
                    <div className={parentStyles.bigContainer}>
                        <div className={parentStyles.preview__row}>
                            <div className={parentStyles.preview__animations}>
                                <img className={parentStyles.headerBg_about } src={headerBg} alt=""/>
                                <TimeHeader/>
                            </div>
                            <div className={parentStyles.preview__informations}>
                                <h2  className={parentStyles.preview__title}>EXPLORE NEW WORLD</h2>
                                <p  className={parentStyles.preview__subtitle}>We created the Unisphere metaverse and made it free from the physical reality limits.</p>
                            </div>
                        </div>
                        <div className={parentStyles.preview__scroll}>
                            <h5>SCROLL TO EXPLORE</h5>
                            <p className={parentStyles.arrow}></p>
                            <span></span>
                        </div>
                    </div>
                </section>
               <div className={parentStyles.container}>
                   <section className={styles.metaverse}>
                       <div className={styles.container}>
                           <div className={styles.metaverse__row}>
                               <h2>Welcome to the space of new opportunities for life, communication, travel and business.</h2>
                               <div className={styles.animation__vase}>
                                   <Qube/>
                                   <p>Unisphere is the metaverse that augmented the real world. It is based on AR technology and is accessible via your smartphone.</p>
                               </div>
                               <div className={styles.animation__space}>
                                   <Space/>
                                   <p>It’s the first metaverse ecosystem that integrates with different apps. It contributes to the creation of the AR world with unlimited possibilities.</p>
                               </div>
                           </div>
                       </div>
                   </section>
                   {/*<section className={styles.app}>*/}
                   {/*    <div className={styles.app_row}>*/}
                   {/*        <div className={styles.app_header}>*/}
                   {/*            <span className={styles.bgLine}></span>*/}
                   {/*            <h2 className={styles.app_title}>Enter your metaverse</h2>*/}
                   {/*            <p className={styles.app_subtitle}>Connect to Unisphere with the New Layer app to create your metaverse and interact with other users.</p>*/}
                   {/*        </div>*/}
                   {/*        <div className={styles.app_info}>*/}
                   {/*            <h2>New Layer app</h2>*/}
                   {/*            <p>Unisphere browser. Your ticket to the world of augmented reality. New Layer opens this world for everyone.</p>*/}
                   {/*             <AppleBtn/>*/}
                   {/*            <GoogleBtn/>*/}
                   {/*        </div>*/}
                   {/*        <div className={styles.app_phone}>*/}
                   {/*            <Phone/>*/}
                   {/*            <span></span>*/}
                   {/*        </div>*/}
                   {/*    </div>*/}
                   {/*</section>*/}
                   {/*<section className={styles.howUse}>*/}
                   {/*    <h2  className={styles.howUse_title}>How to use?</h2>*/}
                   {/*    <p className={styles.howUse_subtitle}>There are many abilities of using the Unisphere via New Layer app. Find a guide below. </p>*/}
                   {/*    <div className={styles.howUse_accordion_block}>*/}
                   {/*        <Accordion/>*/}
                   {/*    </div>*/}
                   {/*</section>*/}
               </div>
            <Footer/>
            </div>
    )
}
export default Time