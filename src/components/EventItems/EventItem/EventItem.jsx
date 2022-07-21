import React from "react";
import * as styles from "./styles.module.scss";
import ItemMapMark from "../../../assets/Events/ItemMapMark";

const EventItem = ({event}) => {

    return (
        <div className={styles.event_item_container}>
            <div className={styles.event_item_img_container}>
                <img className={styles.event_item_img} src={event.eventImg} alt=""/>
            </div>
            <div className={styles.event_item_place_container}>
                <ItemMapMark/>
                <p className={styles.event_item_place}>
                    {event.eventPlace}
                </p>
            </div>
            <div className={styles.event_text_container}>
                <p className={styles.event_item_date}>{event.eventDate}</p>
                <h3 className={styles.event_item_title}>{event.eventTitle}</h3>
            </div>
        </div>
    )

}

export default EventItem