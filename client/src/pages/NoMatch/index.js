import React from 'react'
import { Header, Message } from "semantic-ui-react";
import { useTrail, animated } from 'react-spring';


const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export const NoMatch = () => {
    // Show 404 message if url don't match any routes
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
    return (
        <>
            <Message id="head"className="message-container" size="huge" secondary="true">
            
                <Header size="huge"id="font-404" > <p >404 Page Not Found</p> </Header>
                <h1>
                    <span role="img" aria-label="Face With Rolling Eyes Emoji">
                        🙄
              </span>
                </h1>
            </Message>
            <div>
                    <svg style={{ position: 'absolute', width: 0, height: 0}}>
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
                </div>
        </>
    )
}
export default NoMatch;