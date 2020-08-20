import React from "react";
function IdeaSearch(props) {
    return (
      <div id="togo">
        {/* <img className="jumboImg" alt="google logo" src="./assets/img/google_logo.png"></img> */}
        <p >{props.title}</p>
        {/* <h2>{props.subTitle}</h2> */}
        {props.children}
      </div>
    );
  }
  
  export default IdeaSearch;