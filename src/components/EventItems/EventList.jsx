import React, {useState} from "react";
import * as styles from "./styles.module.scss";
import EventItem from "./EventItem/EventItem";
import {Events} from '../../DB/DB'
import {Link} from "gatsby";


const EventList = () => {
    const [events, setEvents] = useState(Events)

    return (
        <div className={styles.event_list_container}>
            {events.map(event => {
                return <Link className={styles.event_container} to={`/event/${event.id}`}>
                    <EventItem event={event}/>
                </Link>
            })
            }
        </div>
    )
}
export default EventList