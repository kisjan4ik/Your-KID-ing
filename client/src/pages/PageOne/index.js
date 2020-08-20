import React from 'react';
import { Header, Message } from "semantic-ui-react";
import { useTrail, animated } from 'react-spring';
import "./style.css";

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export const PageOne = () => {

    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
    return (
        <>

            <Message id="head" className="message-container" size="huge" secondary="true"><svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                    <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                </filter>
            </svg>
            <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
                {trail.map((props, index) => (
                    <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
                ))}
            </div>
                <Header id="font-pg1" size="huge"><p>Page One</p>  </Header>
                <p id="subtitle1">This is a Protected Route</p>
            </Message>

            
        </>
    )
    
}

export default PageOne;
