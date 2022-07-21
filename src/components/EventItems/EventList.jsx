import React from "react";
import * as styles from "./styles.module.scss";
import EventItem from "./EventItem/EventItem";

const events = [{
    eventImg: 'https://work-api.space/wp-content/uploads/2022/07/ff1-e1658163791878.jpg',
    eventPlace: '950 Fulton St, Brooklyn, NY 11238, USA',
    eventDate: '22 / 04 / 23 - 25 / 04 / 23',
    eventTitle: 'Welcome to the real world metaverse'
}, {
    eventImg: 'https://work-api.space/wp-content/uploads/2022/07/ff1-e1658163791878.jpg',
    eventPlace: '950 Fulton St, Brooklyn, NY 11238, USA',
    eventDate: '04 / 05 / 23',
    eventTitle: 'The world without limits. I\'ts Unisphere.'
},{
    eventImg: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/amfan20221000_variant_quesada.jpg',
    eventPlace: '950 Fulton St, Brooklyn, NY 11238, USA',
    eventDate: '04 / 05 / 23',
    eventTitle: 'The world without limits. I\'ts Unisphere.'
},{
    eventImg: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29taWN8ZW58MHx8MHx8&w=1000&q=80',
    eventPlace: '950 Fulton St, Brooklyn, NY 11238, USA',
    eventDate: '04 / 05 / 23',
    eventTitle: 'The world without limits. I\'ts Unisphere.'
},{
    eventImg: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29taWNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    eventPlace: '950 Fulton St, Brooklyn, NY 11238, USA',
    eventDate: '04 / 05 / 23',
    eventTitle: 'The world without limits. I\'ts Unisphere.'
},{
    eventImg: 'https://work-api.space/wp-content/uploads/2022/07/ff1-e1658163791878.jpg',
    eventPlace: '950 Fulton St, Brooklyn, NY 11238, USA',
    eventDate: '04 / 05 / 23',
    eventTitle: 'The world without limits. I\'ts Unisphere.'
}]

const EventList = () => {
    return (
        <div className={styles.event_list_container}>
            {events.map(event => <EventItem event={event} />)}
        </div>
    )
}
export default EventList