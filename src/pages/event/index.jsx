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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore xriet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className={styles.quote_text_block}>
                            <h4 className={styles.quote}>Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem</h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Sinter occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                        </div>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </div>
                    <div className={styles.text_photo_block}>
                        <h3>Text Block and Photo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore xriet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className={styles.img_right_block}>
                            <div className={styles.img_text_block}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Sinter occaecat cupidatat non proident, mollit anim id est laborum.
                                <br/>
                                <br/>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            </div>
                            <img src={event.eventImg} alt=""/>
                        </div>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                            quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem.</p>
                        <div className={styles.img_left_block}>
                            <img src={event.eventImg} alt=""/>
                            <div className={styles.img_text_block}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Sinter occaecat cupidatat non proident, mollit anim id est laborum.
                                <br/>
                                <br/>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            </div>
                        </div>
                        <p>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <img className={styles.full_width_img} src={event.eventImg} alt=""/>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                            est laborum et dolorum fuga.</p>
                    </div>
                    <div className={styles.lists}>
                        <h3>Lists</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore xriet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <h4>Bulleted list</h4>
                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                            nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                            possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                        <ul>
                            <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque</li>
                            <li>Nihil impedit quo minus id quod maxime placeat facere possimus</li>
                            <li>Omnis voluptas assumenda est, omnis dolor repellendus</li>
                        </ul>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem.</p>
                        <h4>Numbered List</h4>
                        <ol>
                            <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque</li>
                            <li>Nihil impedit quo minus id quod maxime placeat facere possimus</li>
                            <li>Omnis voluptas assumenda est, omnis dolor repellendus</li>
                        </ol>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Event