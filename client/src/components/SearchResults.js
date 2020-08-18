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



class SearchResults extends React.Component {

    state = {
        where: "",
        activeness: "",
        age: "",
        ideas: []
    };



    handleInputChange = event => {

        const value = event.target.value;

        this.setState([
            {
                where: value,
                message: ""
            },
            {
                activeness: value,
                message: ""
            },
            {
                age:value,
                message: ""
            }

        ]);
    };

    
    loadIdeas = event => {
        event.preventDefault();
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
                <Form
                    query={this.state.where}
                    handleInputChange={this.handleInputChange}
                    loadIdeas={this.loadIdeas}
                    message={this.state.message}
                >
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