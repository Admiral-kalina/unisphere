import React from "react";
import Footer from "../../components/Footer/Footer";
import EventsTab from "../../components/EventsTab/EventsTabs";
import Scroll from "../../components/ScrollSection/ScrollSection";

const Events = () => {
    return(
        <div>
            <EventsTab></EventsTab>
            <Scroll></Scroll>
            <Footer/>
        </div>
    )
}
export default Events