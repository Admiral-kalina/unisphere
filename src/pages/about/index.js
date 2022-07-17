import React from "react";
import * as styles from "./styles.module.scss";
import Footer from "../../components/Footer/Footer";
import Birds from "../../assets/animateImg/Birds/Birds";
import Man from "../../assets/animateImg/Man/Man";
import OurMission from "../../assets/animateImg/ourMission/OurMission";

const About = () => {
    return(
        <div>
            <div className={styles.page}></div>
            <Birds/>
            <Man/>
            <OurMission/>
            <Footer/>
        </div>
    )
}
export default About