import React from "react";
import { useSelector } from "react-redux";




function Idea(props) {
  console.log(props);

  const { currentUser, isAuthenticated } = useSelector(state => state.auth)

  return (
    <div id="resultitem">
      <div>
        <img id="imglst" alt={props.category} src={props.image} />
      </div>
      <div >
      <p id="label"> {props.placename}</p>
      <p id="listitem"><span id="listitem1">Category :</span>{props.category}</p>
      
      <p id="listitem"><span id="listitem1">Activity level :</span>{props.activeness}</p>
      <p id="listitem"><span id="listitem1">Age :</span>{props.age}</p>
      <br/>
      </div>
      <div>
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <button id="flatxl1">Go to the Website</button></a>
      <button  id="flatxl1" onClick={() => props.saveIdea(props.placeid, currentUser.email)} className="btnSave">Save the place</button>
   </div>
    </div>
  );
}

export default Idea;