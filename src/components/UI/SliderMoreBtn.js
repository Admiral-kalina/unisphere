import React from 'react';
import * as styles from "./styles.module.scss";

const SliderMoreBtn = ({children}) => {
    return (
        <button className={styles.btnLearnMore}>{children}</button>
    );
};

export default SliderMoreBtn;