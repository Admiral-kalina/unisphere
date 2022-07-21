import React from 'react';
import Ticker from 'react-ticker'
import "./styles.scss";


const AboutTicker = () => {
    return (
        <Ticker>
            {() => (
                <>
                    <h2 className={'ticker__element'}> ◌ Freedom Independence ◌ Intelligence ◌ Sociability ◌ Digitality Globalityindex  </h2>
                </>
            )}
        </Ticker>
    );
};

export default AboutTicker;