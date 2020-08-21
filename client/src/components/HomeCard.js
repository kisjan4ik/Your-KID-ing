import React from "react";
import HomeForm from "./HomeForm"
import boardgames from "../assets/images/boardgames.jpg";
import arts from "../assets/images/arts.jpg";
import education from "../assets/images/education.jpg";
import indoorgames from "../assets/images/indoorgames.jpg";
import Row from "react-bootstrap/Row";
import Container from  "react-bootstrap/Container";
import Carousel from "./Carousel";




class HomeCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Arts and crafts",
                    imgSrc: arts,
                    link: "https://shrouded-scrubland-07214.herokuapp.com/",
                    selected: false
                },
                {
                    id: 1,
                    title: "Board games",
                    imgSrc: boardgames,
                    link: "https://shrouded-scrubland-07214.herokuapp.com/",
                    selected: false
                },
                {
                    id: 2,
                    title: "Educational materials",
                    imgSrc: education,
                    link: "https://kisjan4ik.github.io/Gig-Crasher/",
                    selected: false
                },
                {
                    id: 3,
                    title: "Indoor games",
                    imgSrc: indoorgames,
                    link: "https://kisjan4ik.github.io/JavaScript-Password-Generator/",
                    selected: false
                },


            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        })

this.setState({
    items
})
    }

makeItems = (items) => {
    return items.map (item => {
        return <HomeForm item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
    })
}

    render() {
        return (
            <>
            <Container fluid={true}>
                
                <Row className="justify-content-around">
                
                    {this.makeItems(this.state.items)}

                </Row>
                
            </Container>
            <Carousel className="t-card-image"/>
            
            </>
        )
    }
}

export default HomeCard;