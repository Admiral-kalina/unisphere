import React, { useEffect, createRef } from "react";
import lottie from "lottie-web";
import animation from "./Cube.json";
import * as styles from "./styles.module.scss"

const Cube = () => {

    let animationContainer = createRef();

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: animation,
            currentFrame: 100,
            currentRawFrame: 100,
        });
        console.log(anim)
        return () => anim.destroy(); // optional clean up for unmounting
    }, []);

    return (
        <div ref={animationContainer} />
    )
}
export default Cube