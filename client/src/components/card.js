import React from "react";
import CardInfo from "./CardInfo";

function Card(props) {

    return (
        <div className="" onClick={() => props.click(props.item)}>
            
            <img className="pt-5" src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} />}
        </div>
    )

}
export default Card;