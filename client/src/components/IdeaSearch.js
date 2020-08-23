import React from "react";

function IdeaSearch(props) {
  return (
    <div id="togo" >
      <p >{props.title}</p>
      {props.children}
    </div>
  );
}

export default IdeaSearch;