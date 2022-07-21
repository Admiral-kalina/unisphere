import {Tabs} from 'antd';
import React from 'react';
import './EventsTabs.scss'
import MapMark from "../../assets/Events/MapMark";
import EventsTabIcon from "../../assets/Events/EventsTabIcon";
import EventList from "../EventItems/EventList";
import EventsMap from "../EventsMap/EventsMap";

const {TabPane} = Tabs;

const onChange = (key) => {
    console.log(key);
};

const EventsTab = () => (
    <Tabs onChange={onChange} type="card">
        <TabPane tab={<EventsTabIcon/>} key="1">
            <EventList />
        </TabPane>
        <TabPane tab={<MapMark/>} key="2">
           <EventsMap/>
        </TabPane>
    </Tabs>
);

export default EventsTab;