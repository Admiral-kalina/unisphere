import React from 'react';
import * as styles from "./styles.module.scss"

const App = () => {
    return (
        <div className={styles.carousel_container}>
            <h3 className='slider_title'>ENTER THE UNI SPHERE</h3>
            <p className='slider_subtitle'>Here are additional information about the Unisphere and out pitch desk.Join us n investor.</p>
            <button className={styles.btnLearnMore}>More</button>
        </div>
    );
};

export default App;