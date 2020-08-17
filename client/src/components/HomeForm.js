import React from "react";
import { Link } from "react-router-dom";

function HomeForm(props) {

    return (
        <div className="t-inline-block t-card" onClick={() => props.click(props.item.image)}>
            <Link to={props.item.link} target="blank" rel="noopener noreferrer"><img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} /></Link>

        </div>
    )
}
export default HomeForm;