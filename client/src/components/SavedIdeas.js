import React, { Component } from "react";
import IdeaSearch from "./IdeaSearch";
import ChosenIdeas from "./ChosenIdeas";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import saved from "../assets/images/kids-transparent-background-1.png";

class SavedIdeas extends Component {
    constructor(props) {
        super(props)

    }
    // componentDidMount() {
    //     console.log(this.props);

    // }


    render() {

        return (
            <div id="results1">
                <img alt="saved" id="imgplace1" src={saved} height="145px" width="310px" />

                <IdeaSearch
                    title={"Saved places :"} >
                    <p></p>
                </IdeaSearch>

                {this.props.savedplaces.map((idea, i) => {

                    return (
                        <ChosenIdeas key={i} >

                            <div id="resultitem1">
                                <Row>
                                    <Col sm={5}>

                                        <img id="imglst" alt={idea.placename} src={idea.image} />
                                    </Col>
                                    <Col sm={5}>
                                        <p id="label">
                                            {idea.placename}</p>
                                        <p id="listitem"><span id="listitem1">Address:</span> {idea.address}</p>
                                        <p id="listitem"><span id="listitem1"> Phone:</span> {idea.phone}</p>

                                        <a href={idea.website} target="_blank" rel="noopener noreferrer">
                                            <button id="flatxl2">view</button></a>
                                    </Col>
                                </Row>
                            </div>

                        </ChosenIdeas>
                    );
                }
                )}
            </div>
        )

    }
}

export default SavedIdeas