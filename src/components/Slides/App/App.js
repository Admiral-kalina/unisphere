import React from 'react';
import * as styles from "./styles.module.scss"
import SliderPhone from "../../../assets/animateImg/SliderPhone/SliderPhone";
import AppleBtn from "../../UI/AppleBtn";

const App = () => {
    return (
        <div className={styles.carousel_container}>
            <div className={styles.row}>
                <div className={styles.column_left}>
                    <h3 className='slider_title'>ENTER THE UNISPHERE</h3>
                </div>
                <div className={styles.phone_block}>
                    <SliderPhone/>
                </div>
                <div className={styles.column_right}>
                    <h3 className='slider_title'>with the New Layer app</h3>
                    <div className={styles.appleBtn}>
                        <AppleBtn/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;