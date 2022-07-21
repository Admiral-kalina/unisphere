import { Collapse } from 'antd';
import React from 'react';
import "./Accordion.scss"
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Accordion = () => (
    <div className='accordion_container'>
        <Collapse defaultActiveKey={['1']} ghost>
            <Panel header="What is it?" key="1">
                <p>New Layer is an augmented reality mobile app with the Unisphere metaverse inside. Our mission is to help people save time and resources using augmented reality.
                    Place 3D objects on different surfaces with the app and complement objects with media files.
                    Take photos and videos, and place them on a map so other users can see them, chat in the app and send objects to family and friends.
                    We do everything to make your life better and easier with AR technologies. Now New Layer is available only on the iOS platform.
                </p>
            </Panel>
            <Panel header="What can I do with the New Layer?" key="2">
                <p>{text}</p>
            </Panel>
            <Panel header="Usage ideas" key="3">
                <p>{text}</p>
            </Panel>
            <Panel header="Public objects lifetime" key="4">
                <p>{text}</p>
            </Panel>
            <Panel header="Usage Join the team" key="5">
                <p>{text}</p>
            </Panel>
        </Collapse>
    </div>
);

export default Accordion;