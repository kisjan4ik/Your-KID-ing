import React from "react";
import Form from "react-bootstrap/Form";
import APIideas from "../utils/APIideas";
import IdeaSearch from "./IdeaSearch";
import ChosenIdeas from "./ChosenIdeas";
import Idea from "./Idea";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import kids from "../assets/images/kidev.png"
import UserSavedPlaces from "./UserSavedPlaces";


class SearchResults extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            activtype: "",
            age: "",
            ideas: [],
            savedplaces: []
        };

    }

    componentDidMount() {

        APIideas.getUserPlaces(localStorage.getItem("id")).then(result => {

            this.setState({ savedplaces: result.data.savedplaces })
        })
            .catch(err => console.log(err))
    }

    handleChange = event => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({ ...this.state, [event.target.name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.loadIdeas({
            where: this.state.activtype,

            age: this.state.age
        });

    }

    loadIdeas = (activity) => {


        APIideas.where(activity)
            .then(res => {

                this.setState({
                    ideas: res.data,
                    where: "",
                })
            })

            .catch(err => console.log(err));
    }


    saveIdea = (id, email) => {

        APIideas.saveIdea(id, email)

            .then(res => {

                this.setState({ ...this.state, savedplaces: [...this.state.savedplaces, res.data[0]] })

            })
            .catch(err => console.log(err));
    }

    deleteUserPlace = (id, userId) => {

        APIideas.deleteUserPlace(id, userId)
            .then(res =>
                APIideas.getUserPlaces(localStorage.getItem("id")).then(result => {

                    this.setState({ savedplaces: result.data.savedplaces })
                })
                    .catch(err => console.log(err))



                    .catch(err => console.log(err))

            )
    }

    render() {

        return (
            <Row>
                <Col sm={6} >

                    <IdeaSearch
                        title={"Find a place to go :"}
                    >
                    </IdeaSearch>
                    <Form id="placesearch" onSubmit={this.handleSubmit}>
                        <Form.Group >
                            <Form.Label id="label">
                                Activy type:
                    </Form.Label>
                            <Form.Control id="formcontrol" as="select" name="activtype" value={this.state.activtype} onChange={this.handleChange}>
                                <option id="option"></option>
                                <option id="option">Indoor</option>
                                <option id="option">Outdoor</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label id="label2">
                                Age:
                    </Form.Label>
                            <Form.Control id="formcontrol" as="select" name="age" value={this.state.age} onChange={this.handleChange}>
                                <option id="option"></option>
                                <option id="option">0+</option>
                                <option id="option">2+</option>
                                <option id="option">3+</option>
                                <option id="option">4+</option>
                                <option id="option">5+</option>
                                <option id="option">6+</option>
                                <option id="option">7+</option>
                                <option id="option">8+</option>
                                <option id="option">10+</option>
                                <option id="option">12+</option>
                            </Form.Control>
                        </Form.Group>
                        <Button id="flatxl" type="submit">
                            Submit
                    </Button>
                    </Form>

                    <div id="results">

                        <ChosenIdeas>
                            <img alt="imgplace" id="imgplace" src={kids} height="200px" width="290px" />
                            {this.state.ideas.map((idea, i) => {
                                return (
                                    <Idea
                                        placeid={idea._id}
                                        key={i}
                                        ideaId={i}
                                        placename={idea.placename}
                                        image={idea.image}
                                        category={idea.category}
                                        activeness={idea.activeness}
                                        age={idea.age}
                                        address={idea.adress}
                                        phone={idea.phone}
                                        website={idea.website}
                                        saveIdea={this.saveIdea}
                                        onMyListText={this.state.onMyListText}
                                    />
                                )
                            })}

                        </ChosenIdeas >

                    </div>
                </Col>
                <Col
                    sm={6}
                >
                    <UserSavedPlaces savedplaces={this.state.savedplaces} deleteUserPlace={this.deleteUserPlace}></UserSavedPlaces>

                </Col>
            </Row>
        )
    }

}
export default SearchResults;