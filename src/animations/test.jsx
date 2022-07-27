import React, { useRef } from 'react';
import { useInViewport } from 'ahooks';
import * as styles from "./styles.module.scss";

export default function Test () {
    const ref = useRef(null);
    const [inViewport] = useInViewport(ref);
    return (
        <div>
            <div style={{ width: 300, height: 300, overflow: 'scroll', border: '1px solid' }}>
                scroll here
                <div style={{ height: 800 }}>
                    <div
                        ref={ref}
                        style={{
                            border: '1px solid',
                            height: 100,
                            width: 100,
                            textAlign: 'center',
                            marginTop: 80,
                        }}
                    >
                        observer dom
                    </div>
                </div>
            </div>
            <div className={inViewport ? null : styles.animation }>
                inViewport: {inViewport ? 'visible' : 'hidden'}
            </div>
        </div>
    );
};