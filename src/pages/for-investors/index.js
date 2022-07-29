import React from "react";
import Footer from "../../components/Footer/Footer";
import './styles.scss'
import TimeAnimationGif from "../../assets/gifAnimations/TimeAnimationGif";
import AboutAnimationGif from "../../assets/gifAnimations/AboutAnimationGif";

const ForInvestors = () => {
    return (
        <div>
            <div>ForInvestors</div>
            <div className='animation_wrapper'>
                <TimeAnimationGif/>
                <AboutAnimationGif/>
            </div>
            <Footer/>
        </div>

    )
}
export default ForInvestors