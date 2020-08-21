import React from "react";
import Card from "./card";
import event from "../assets/images/events.jpg";
import Row from "react-bootstrap/Row";
import Container from  "react-bootstrap/Container";


class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    imgSrc: event,
                    link: "https://mommypoppins.com/events/1400/orlando/all/tag/all/age/all/all/deals/0/near/0/0",
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
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
    })
}

    render() {
        return (
            <Container fluid={true} >
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        )
    }
}

export default Event;