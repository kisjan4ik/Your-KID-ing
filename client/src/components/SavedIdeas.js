import React, { Component } from "react";
// import IdeaSearch from "./IdeaSearch";
// import ChosenIdeas from "./ChosenIdeas";
// import APIideas from "../utils/APIideas";
import IdeaSearch from "./IdeaSearch";
import ChosenIdeas from "./ChosenIdeas";


class SavedIdeas extends Component {
    constructor(props){
  super (props)
}
    componentDidMount() {
        console.log(this.props.savedideas);
        
    }


    // showSavedIdeas = () => {
    //     APIideas.getIdeas()
    //         .then(res =>
    //             this.setState({ ideas: res.data })
    //         )
    //         .catch(err => console.log(err));
    // };

   


    render() {

        return (
            <div>
               <IdeaSearch
                   title={"Saved places"}>

                   </IdeaSearch>
                {this.props.savedideas.map((idea, i) => {
                    return (
                        <ChosenIdeas key={i} >
                            
                            <div>
                                <div className="">
                                    <img alt={idea.placename} src={idea.image} />
                                </div>
                                <p>Placename:
                                    {/* {idea._id}  */}
                                    {idea.placename}</p>
                                 <p className="">Address: {idea.address}</p>
                                <p className=""> Phone: {idea.phone}</p>
                                <a href={idea.website} target="_blank" rel="noopener noreferrer">
                                    <button className="viewBtnSaved">view</button></a>
                                
                           </div>
                        </ChosenIdeas>
                    );
                })}
            </div>  
        )
        
    }
}

export default SavedIdeas