import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import * as styles from "./style.scss"
import  "./style.scss"
import SEvents from "../../components/Slides/Events/SEvents";
import SInvestor from "../../components/Slides/Investor/SInvestor";
import App from "../../components/Slides/App/App";
import SContacts from "../../components/Slides/Contacts/SContacts";
import SMain from "../../components/Slides/Main/SMain";
import SExplore from "../../components/Slides/Explore/SExplore";
import STime from "../../components/Slides/Time/STime";
import SAbout from "../../components/Slides/About/SAbout";


const Explore = () => {
    return (
        <div>
            <Carousel>
                <div className='sliderCarousel_block'>
                    <SMain/>
                </div>
                <div className='sliderCarousel_block'>
                   <SExplore/>
                </div>
                <div className='sliderCarousel_block'>
                    <STime/>
                </div>
                <div className='sliderCarousel_block'>
                    <SAbout/>
                </div>
                <div className='sliderCarousel_block'>
                    <SEvents/>
                </div>
                <div className='sliderCarousel_block'>
                    <SInvestor/>
                </div>
                <div className='sliderCarousel_block'>
                    <App/>
                </div>
                <div className='sliderCarousel_block'>
                    <SContacts/>
                </div>
            </Carousel>
        </div>
    )
}
export default Explore


