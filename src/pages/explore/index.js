import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import * as styles from "./styles.module.scss"
import Unisp from "../../assets/Unisp";


const Explore = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <div className={styles.carousel_block}>
                        <div className={styles.start_block}>
                            <Unisp/>
                            <h1>Welcome to the real world metaverse</h1>
                            <p>Unisphere is a metaverse that complements reality. Bring virtual objects to the real world and place them at specific locations. Send 3D objects to each other and interact with them using your smartphone </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.carousel_block}>
                        <p>zal2</p>
                    </div>
                </div>
                <div>
                    <div className={styles.carousel_block}>
                        <p>zal3</p>
                    </div>
                </div>
                <div>
                    <div className={styles.carousel_block}>
                        <p>za4l</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
export default Explore

