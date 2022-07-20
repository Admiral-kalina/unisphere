import {Tabs} from 'antd';
import React from 'react';
import './EventsTabs.scss'
import MapMark from "../../assets/Events/MapMark";
import EventsTabIcon from "../../assets/Events/EventsTabIcon";

const {TabPane} = Tabs;

const onChange = (key) => {
    console.log(key);
};

const EventsTab = () => (
    <Tabs onChange={onChange} type="card">
        <TabPane tab={<EventsTabIcon/>} key="1">

        </TabPane>
        <TabPane tab={<MapMark/>} key="2">
            Content of Tab Pane 2
        </TabPane>
    </Tabs>
);

export default EventsTab;