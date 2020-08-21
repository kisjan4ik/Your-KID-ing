import React from "react";
import kids from "../assets/images/kidev.png"


function ChosenIdeas(props) {
  return (
    <div >
      <img  alt="imgplace" id="imgplace"src={kids} height="250px" width="330px" />
      {props.children}
    </div>
  );
}

export default ChosenIdeas;