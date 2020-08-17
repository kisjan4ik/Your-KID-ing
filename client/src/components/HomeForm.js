import React from "react";
import HomeCardInfo from "../components/HomeCardInfo";

function HomeForm(props){

return(
    <div className="t-inline-block t-card" onClick={() => props.click(props.item)}>
    <img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
{props.item.selected && <HomeCardInfo  link={props.item.link} />}
</div>
)

}
 export default HomeForm;