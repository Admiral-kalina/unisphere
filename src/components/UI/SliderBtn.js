import React from 'react';
import * as styles from "./styles.module.scss";

const SliderBtn = ({children}) => {
    return (
        <button className={styles.btnLearnMore}>{children}</button>
    );
};

export default SliderBtn;