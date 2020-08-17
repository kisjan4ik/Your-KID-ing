import React from "react";
import {useSpring, animated} from "react-spring";

function HomeCardInfo(props) {

    const style = useSpring({opacity:1, from:{opacity: 0}});
return (
    <animated.div className="homecard" style={style} >
        
        <a href={props.link} target="blank" rel="noopener noreferrer">View</a>
    </animated.div>
)

}
export default HomeCardInfo;