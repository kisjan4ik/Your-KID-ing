import React from "react";
import Form from "react-bootstrap/Form";
import APIideas from "../utils/APIideas";
import IdeaSearch from "./IdeaSearch";
import ChosenIdeas from "./ChosenIdeas";
import Idea from "./Idea";
import Button from "react-bootstrap/Button";
import SavedIdeas from "../components/SavedIdeas";
import { rest } from "lodash";
import API from "../utils/API";





class SearchResults extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            activtype: "",
            // actlevel: "",
            age: "",
            ideas: [],
            savedideas: []
        };

    }

    componentDidMount() {
       this.loadUserPlaces();

    }

    loadUserPlaces = (savedplaces) => {
        // API call to a function that would me made in API to get the user and all of their saved places and bring them back to the page
        // getSaved places - API function
        // express route that handles /userplaces 
        // in Controller - populate method
        API.getSaved(savedplaces)
        .then(res =>
            this.setState({savedplaces: res.data})
            )
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({ ...this.state, [event.target.name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("states:" + this.state.activtype,
            // this.state.actlevel, 
            this.state.age);
        this.loadIdeas({
            where: this.state.activtype,
            //  activeness: this.state.actlevel,
            age: this.state.age
        });

    }

    loadIdeas = (activity) => {


        APIideas.where(activity)
            .then(res => {
                console.log("res.data: " + JSON.stringify(res));
                this.setState({
                    ideas: res.data,
                    where: "",
                })
            })
            // .then(res => {
            //     APIideas.geideatIdeas()
            //         .then(res => {
            //             res.data.forEach(item => {
            //                 for (let j = 0; j < this.where.ideas.length; j++) {
            //                     if (item.where === this.where.ideas[j].where) {
            //                         let newIdeaArray = [...this.where.ideas]
            //                         newIdeaArray.splice([j], 1)
            //                         this.setState({ ideas: newIdeaArray })
            //                     }
            //                 }
            //             })
            //         })
            // })
            .catch(err => console.log(err));
    }


    saveIdea = (id, email) => {
        // build idea
        // let savedidea = {
        //     placename: this.state.ideas[id].placename,
        //     image: this.state.ideas[id].image,
        //     address: this.state.ideas[id].address,
        //     phone: this.state.ideas[id].phone,
        //     website: this.state.ideas[id].website
        // }
        // update savedideas array with the idea



        APIideas.saveIdea(id, email)

            .then(res => {
                console.log(res);
                this.setState({ ...this.state, savedideas: [...this.state.savedideas, res.data[0]] })

                // let newIdeaArray = [...this.state.ideas]
                // newIdeaArray.splice([id], 1)
                // this.setState({ ideas: savedidea })
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div>
                <IdeaSearch
                    title={"Find a place to go :"}
                // subTitle={"Search for and Save places and activities you would like"}
                >
                </IdeaSearch>
                <Form id="placesearch" onSubmit={this.handleSubmit}>
                    <Form.Group >
                        <Form.Label id="label">
                            Activy type:
                    </Form.Label>
                        <Form.Control id="formcontrol" as="select" name="activtype" value={this.state.activtype} onChange={this.handleChange}>
                            <option id="option">Indoor</option>
                            <option id="option">Outdoor</option>
                        </Form.Control>
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label>
                            Activeness:
                    </Form.Label>
                        <Form.Control as="select" name="actlevel" value={this.state.actlevel} onChange={this.handleChange}>
                            <option>Active</option>
                            <option>Moderate</option>
                            <option>Passive</option>
                        </Form.Control>
                    </Form.Group> */}
                    <Form.Group>
                        <Form.Label id="label2">
                            Age:
                    </Form.Label>
                        <Form.Control id="formcontrol" as="select" name="age" value={this.state.age} onChange={this.handleChange}>
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
                        {/* if(this.state.ideas.length) */}
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
                <SavedIdeas savedideas={this.state.savedideas} />
            </div>
        )
    }

}
export default SearchResults;