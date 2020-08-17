import React from "react";
import CardInfo from "./CardInfo";
import Location from "./Location";


function Card(props) {

    return (
        <div className="" onClick={() => props.click(props.item)}>
            <Location  className="pt-5"/>
            <img src={props.item.imgSrc} alt={props.item.imgSrc} />
         
            {props.item.selected && <CardInfo  subtitle={props.item.subtitle} link={props.item.link} />}
        </div>
    )

}
export default Card;