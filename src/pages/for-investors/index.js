import React from "react";
import Footer from "../../components/Footer/Footer";
import SliderPhone from "../../assets/animateImg/SliderPhone/SliderPhone";
import CylindersAnimation from "../../animations/SExplore/Cylinders/CylindersAnimation";
import Cube from "../../animations/SExplore/Cube/CubeAnimation";

const ForInvestors = () => {
    return(
        <div>
            <div>ForInvestors</div>
            <CylindersAnimation />
            <Cube />
            <Footer/>

        </div>

    )
}
export default ForInvestors