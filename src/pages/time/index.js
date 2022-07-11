import React from "react";
import * as styles from "./styles.module.scss";
import Group from "../../images/Time/Group.png"
const Time = () => {
    return(
            <div className={styles.content}>
                <section className={styles.preview}>
                    <div className={styles.preview__row}>
                        <div className={styles.preview__animations}>
                        </div>
                        <div className={styles.preview__informations}>
                            <h2>EXPLORE NEW WORLD</h2>
                            <p>We created the Unisphere metaverse and made it free from the physical reality limits.</p>
                        </div>
                    </div>
                    <div className={styles.preview__scroll}>
                        <h5>SCROLL TO EXPLORE</h5>
                        <p className={styles.arrow}></p>
                    </div>
                </section>
                <section className={styles.metaverse}>
                    <div className={styles.container}>
                        <div className={styles.metaverse__row}>
                            <h2>Welcome to the space of new opportunities for life, communication, travel and business.</h2>
                            <div className={styles.animation__vase}>
                                <span></span>
                                <p>Unisphere is the metaverse that augmented the real world. It is based on AR technology and is accessible via your smartphone.</p>
                            </div>
                            <div className={styles.animation__space}>
                                <span></span>
                                <p>It’s the first metaverse ecosystem that integrates with different apps. It contributes to the creation of the AR world with unlimited possibilities.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.app}>
                    <div className={styles.app_row}>
                        <div className={styles.app_header}>
                            <span className={styles.bgLine}></span>
                            <h2 className={styles.app_title}>Enter your metaverse</h2>
                            <p className={styles.app_subtitle}>Connect to Unisphere with the New Layer app to create your metaverse and interact with other users.</p>
                        </div>
                        <div className={styles.app_info}>
                            <h2>New Layer app</h2>
                            <p>Unisphere browser. Your ticket to the world of augmented reality. New Layer opens this world for everyone.</p>
                            <a href='' className={styles.appleBtn}><span></span></a>
                            <a href='' className={styles.googleBtn}><span></span></a>
                        </div>
                        <div className={styles.app_phone}>
                            <span></span>
                        </div>
                    </div>
                </section>

            </div>
    )
}
export default Time