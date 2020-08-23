import React from "react";
import HomeForm from "./HomeForm"
import boardgames from "../assets/images/boardgames.jpg";
import arts from "../assets/images/arts.jpg";
import education from "../assets/images/education.jpg";
import indoorgames from "../assets/images/indoorgames.jpg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
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
                    link: "https://drive.google.com/file/d/1n3MgZJhiZNAepSeJqW_9ZJsIhc57Nkre/view?usp=sharing",
                    selected: false
                },
                {
                    id: 1,
                    title: "Board games",
                    imgSrc: boardgames,
                    link: "https://drive.google.com/file/d/1uvfSMv42acKXIZXRVWB7Fa1NhJbFsuSn/view?usp=sharing",
                    selected: false
                },
                {
                    id: 2,
                    title: "Educational materials",
                    imgSrc: education,
                    link: "https://drive.google.com/file/d/1FhcB0nZiUDCkJevUhy0ZRW17aGXcZCgn/view?usp=sharing",
                    selected: false
                },
                {
                    id: 3,
                    title: "Indoor games",
                    imgSrc: indoorgames,
                    link: "https://drive.google.com/file/d/1D5Cb9yS_b-8aDFm9lk5vCQCsJvdodQMU/view?usp=sharing",
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
        return items.map(item => {
            return <HomeForm item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
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
                <Carousel className="t-card-image" />

            </>
        )
    }
}

export default HomeCard;