import React from "react";
import HomeForm from "./HomeForm"
import boardgames from "../assets/images/boardgames.jpg";
import arts from "../assets/images/arts.jpg";
import education from "../assets/images/education.jpg";
import indoorgames from "../assets/images/indoorgames.jpg";
import Row from "react-bootstrap/Row";
import Container from  "react-bootstrap/Container";
import Particles from 'react-particles-js';


class HomeCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    imgSrc: arts,
                    link: "https://murmuring-reef-63999.herokuapp.com/user/login",
                    selected: false
                },
                {
                    id: 1,
                    imgSrc: boardgames,
                    link: "https://shrouded-scrubland-07214.herokuapp.com/",
                    selected: false
                },
                {
                    id: 2,
                    imgSrc: education,
                    link: "https://kisjan4ik.github.io/Gig-Crasher/",
                    selected: false
                },
                {
                    id: 3,
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
            <Container fluid={true}>
                <Particles  params={{
    particles: {
      color: {
        value: [
            "#529B88",
            "#CDD180",
            "#FFFA32",
            "#FB6255",
            "#FB4A53",
            "#FF4E50",
            "#F9D423"
          ]
      },
      "line_linked": {
        "enable": false
    },
      "number": {
        "value": 160,
        "density": {
            "enable": false
        }
    },
    "size": {
        "value": 20,
        "random": true,
        "anim": {
            "speed": 4,
            "size_min": 0.3
        }
    },
    style:{zIndex:1}
    }
  }}
></Particles>
                <Row className="justify-content-around">
                
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        )
    }
}

export default HomeCard;