import React from 'react';
import * as styles from "../../pages/explore/styles.module.scss";

const DetailsBtn = ({children}) => {
    return (
        <button className={styles.btnLearnMore}>{children}</button>
    );
};

export default DetailsBtn;