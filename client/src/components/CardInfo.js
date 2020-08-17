import React from "react";
import {useSpring, animated} from "react-spring";

function CardInfo(props) {

    const style = useSpring({opacity:1, from:{opacity: 0}});
return (
    <div>
    <animated.div className="pt-3" style={style}>
        <p className="">{props.title}</p>
        <p className="">{props.subtitle}</p>
        <a href={props.link} target="blank" rel="noopener noreferrer">View</a>
    </animated.div>
    </div>
)

}
export default CardInfo;