import React from 'react';
import * as styles from "./styles.module.scss";

const EmailBlock = () => {
    return (
        <div className={styles.email_block}>
            <p>GET THE LATEST NEWS</p>
            <div>
                <input placeholder='Enter e-mail' type="text"/>
                <button></button>
            </div>
        </div>
    );
};

export default EmailBlock;