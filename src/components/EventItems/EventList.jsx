import React from "react";
import * as styles from "./styles.module.scss";
import qqw from ''

const events = [{
    eventImg: '../../images/Events/gamepadImg.png',
    eventPlace: '950 Fulton St, Brooklyn, NY 11238, USA',
}, {
    eventImg: '../../images/Events/VRImg.png',
    eventPlace: '950 Fulton St, Brooklyn, NY 11238, USA',
}]


const EventList = () => {

    return (
        <div className={styles.event_list_container}>
            <EventItem/>
        </div>
    )
}