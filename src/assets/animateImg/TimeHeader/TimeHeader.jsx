import React from 'react';
import TimeHeaderBlueBallon from "./TimeHeaderBlueBallon";
import TimeHeaderDarkBalloon from "./TimeHeaderDarkBalloon";
import TimeHeaderCube from "./TimeHeaderCube";

const TimeHeader = () => {
    return (
        <div>
            <TimeHeaderBlueBallon/>
            <TimeHeaderDarkBalloon/>
            <TimeHeaderCube/>
        </div>
    );
};

export default TimeHeader;