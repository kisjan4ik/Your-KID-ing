import React from "react";


function Idea(props) {
  console.log(props);


  return (
    <div className="">
      <div className="">
        <img alt={props.category} src={props.image} />
      </div>
      <h2>{props.placename}</h2>
      <p className="">{props.category}</p>
      
      <p className="">{props.activeness}</p>
      <p className="">{props.age}</p>

      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button className="btnView">View</button></a>
      <button onClick={() => props.saveBook(props.ideaId)} className="btnSave">Save</button>
    </div>
  );
}

export default Idea;