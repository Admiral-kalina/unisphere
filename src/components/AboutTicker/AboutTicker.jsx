import React from 'react';
import Ticker from 'react-ticker'
import "./styles.scss";


const AboutTicker = () => {
    return (
        <Ticker>
            {() => (
                <>
                    <h2 className={'ticker__element'}> ◌ Freedom Independence ◌ Intelligence ◌ Sociability ◌ Digitality Globalityindex  </h2>
                    <h2  className={'ticker__element'} id={'ticker__element'}>  ◌ Intelligence ◌ Sociability ◌ Digitality Globalityindex ◌ Freedom Independence  </h2>
                    <h2  className={'ticker__element'} id={'ticker__element'}>  ◌ Digitality Globalityindex ◌ Freedom Independence ◌ Intelligence ◌ Sociability  </h2>
                </>
            )}
        </Ticker>
    );
};

export default AboutTicker;