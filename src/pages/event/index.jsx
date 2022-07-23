import React from "react";
import {Events} from "../../DB/DB";
import {getEvent} from "../../helpers/getEvent";
import Footer from "../../components/Footer/Footer";
import * as styles from "./styles.module.scss";
import ItemMapMark from "../../assets/Events/ItemMapMark";


const Event = ({id}) => {
    const event = getEvent(Events, id)

    return (
        <div>
            <div className={styles.event_page_container}>
                <div className={styles.event_item_place_container}>
                    <ItemMapMark/>
                    <p className={styles.event_item_place}>
                        {event.eventPlace}
                    </p>
                </div>
                <h2 className={styles.event_page_title}>{event.eventTitle}</h2>
                <p className={styles.event_page_date}>{event.eventDate}</p>
                <img className={styles.event_page_img} src={event.eventImg} alt=""/>
                <div className={styles.event_page_main_text_container}>
                    <p className={styles.event_page_short_description}>{event.shortDescription}</p>
                    <div className={styles.event_page_text_block}>
                        <h3 className={styles.event_page_text_block_title}>Text Block</h3>
                        <p className={styles.event_page_text_block_paragraph}>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore xriet dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            <br/>
                            <br/>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Sinter occaecat cupidatat non proident.</p>
                    </div>
                    <div className={styles.event_page_text_quote_block}>
                        <h3>Text Block and Quote</h3>
                        <p className={styles.event_page_text_block_quote}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        </p>
                        <p className={styles.event_page_text_block_quote_paragraph}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore xriet dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                            <br/>
                            <br/>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Sinter occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                            <br/>
                            <br/>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem. <br/><br/>


                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Event