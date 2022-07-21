import React from "react";
import WorldMap from '../../images/WorldMap.png'
import GoogleMapReact from 'google-map-react';
import * as styles from "./styles.module.scss";

const AnyReactComponent = ({text}) => <div>{text}</div>;

const EventsMap = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{height: '100vh', width: '100%'}}>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}
export default EventsMap