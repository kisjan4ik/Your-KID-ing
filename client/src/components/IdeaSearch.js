import React from "react";
function IdeaSearch(props) {
    return (
      <div className="form">
        {/* <img className="jumboImg" alt="google logo" src="./assets/img/google_logo.png"></img> */}
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
        {props.children}
      </div>
    );
  }
  
  export default IdeaSearch;