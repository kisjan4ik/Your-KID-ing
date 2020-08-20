import React from "react";


function ChosenIdeas(props) {
  return (
    <div id="results">
      {props.children}
    </div>
  );
}

export default ChosenIdeas;