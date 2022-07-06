import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import * as styles from "./styles.module.scss"
import Unisp from "../../assets/Unisp";
import ExploreInformation from "../../components/UI/ExploreInformation";


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
                    <ExploreInformation
                    title={'EXPLORE'}
                    subtitle={'Meet the Unisphere metaverse here. Find out what is how to apply and what to do in it.'}
                    />
                </div>
                <div>
                    <ExploreInformation
                        title={'TIME'}
                        subtitle={'Every object in the Unisphere has its life Time.It regulates the metaverse ecosystem, so it does not overflow with 3D object'}
                    />
                </div>
                <div>
                    <ExploreInformation
                        title={'ABOUT'}
                        subtitle={'The world without limits. It\'s about the Unisphere. Discover the metaverse identity through Philosophy, Misson, Values and Brand Guidelines.'}
                    />
                </div>
            </Carousel>
        </div>
    )
}
export default Explore

