import React, {useRef} from "react";
import {useInViewport} from 'ahooks';
import TimeCircle from "./TimeCircle";
import SandClock from "./SandClock";
import SpaceCometFigure from "../../assets/animateImg/Space/SpaceCircle";

const TimeAnimations = () => {
    const ref = useRef(null);
    const [inViewport] = useInViewport(ref);

    return (
        <div className={inViewport ? 'time-animations-wrapper' : null} ref={ref}>
            <div className='time_circle_wrapper'>
                <TimeCircle/>
            </div>
            <div className='sand-clock_wrapper'>
                <SandClock/>
            </div>
            <div className='blue-circle_wrapper'>
                <SpaceCometFigure />
            </div>
        </div>
    )
}
export default TimeAnimations