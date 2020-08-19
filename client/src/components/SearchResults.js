import React from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Content from "../components/Content";
// import Axios from "axios";
import Event from "../components/Event";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import APIideas from "../utils/APIideas";
import IdeaSearch from "./IdeaSearch";
import ChosenIdeas from "./ChosenIdeas";
import Idea from "./Idea";
import Button from "react-bootstrap/Button";



class SearchResults extends React.Component {

constructor(props) {
    super(props);
   

    this.state = {
        where: "",
        activeness: "",
        age: "",
        ideas: []
    };
    
  }


    loadIdeas = event => {
        event.preventDefault();
        
    let form=event.target
        console.log(form.elements.age.value, form.elements.activity.value, form.elements.activitylevel.value);
        if (this.state.where === "") {
            this.setState({ message: "Indoor or outdoor" })
        } else {
            APIideas.search(this.state.where)
                .then(res => {
                    this.setState({
                        ideas: res.data.items,
                        where: "",
                    })
                })
                .then(res => {
                    APIideas.getIdeas()
                        .then(res => {
                            res.data.forEach(item => {
                                for (let j = 0; j < this.where.ideas.length; j++) {
                                    if (item.where === this.where.ideas[j].where) {
                                        let newIdeaArray = [...this.where.ideas]
                                        newIdeaArray.splice([j], 1)
                                        this.setState({ ideas: newIdeaArray })
                                    }
                                }
                            })
                        })
                })
                .catch(err => console.log(err));
        }
    }

    saveIdea = (id) => {

        APIideas.saveIdea({
            placename: this.state.ideas[id].placename,
            image: this.state.ideas[id].image,
            address: this.state.ideas[id].address,
            phone: this.state.ideas[id].phone,
            website: this.state.ideas[id].website
        })
            .then(res => {
                let newIdeaArray = [...this.state.ideas]
                newIdeaArray.splice([id], 1)
                this.setState({ ideas: newIdeaArray })
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div>
                <IdeaSearch
                    title={"Activities Search:"}
                    subTitle={"Search for and Save places and activities you would like"}>
                </IdeaSearch>
                <Form onSubmit={this.loadIdeas}>
                    <Form.Group>
                        <Form.Label>
                            Activy type:
                    </Form.Label>
                        <Form.Control as="select" name="activity" >
                            <option>Indoor</option>
                            <option>Outdoor</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Activeness:
                    </Form.Label>
                        <Form.Control as="select" name="activitylevel" > 
                            <option>Active</option>
                            <option>Moderate</option>
                            <option>Passive</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Age:
                    </Form.Label>
                        <Form.Control tyoe="text" placeholder="age" name="age" >

                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <ChosenIdeas>
                    {this.state.ideas.map((idea, i) => {
                        return (
                            <Idea
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
                                saveBook={this.saveIdea}
                                onMyListText={this.state.onMyListText}
                            />
                        )
                    })}
                </ChosenIdeas>
                <Event />
            </div>
        )
    }

}
export default SearchResults;