import React from "react";


function HomeForm(props) {

    return (<div id="homecardtitle">
        <p id="homecardtitle" >{props.item.title}</p>
        <div className="t-inline-block t-card" onClick={() => props.click(props.item.image)}>
            <a href={props.item.link} target="blank" rel="noopener noreferrer"><img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} /></a>

        </div>
    </div>
    )
}
export default HomeForm;