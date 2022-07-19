import React from 'react';
import SliderPhonePanel from "./SliderPhonePanel";
import phone from "./img/phone.png"
import * as styles from "./styles.module.scss";
import SliderPhoneButtons from "./SliderPhoneButtons";


const SliderPhone = () => {
    return (
        <div className={styles.sliderPhone_container}>
            <div className={styles.phonePanel_block}>
                <SliderPhonePanel/>
            </div>
            <img className={styles.phone_block} src={phone} alt=""/>
            <div className={styles.phoneButtons_block}>
                <SliderPhoneButtons/>
            </div>
        </div>
    );
};

export default SliderPhone;