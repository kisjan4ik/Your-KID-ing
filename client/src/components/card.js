import React from "react";
import CardInfo from "./CardInfo";
import Location from "./Location";


function Card(props) {

    return (
        <div className="" onClick={() => props.click(props.item)}><p id="label">Want to see events in</p>
            <Location className="pt-5" />
            <img id="size" src={props.item.imgSrc} alt={props.item.imgSrc} />

            {props.item.selected && <CardInfo link={props.item.link} />}
        </div>
    )

}
export default Card;