import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Content from "../components/Content";
import Axios from "axios";
import Event from "../components/Event";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            where: "",
            activeness: "",
            age: "",
            disabled: false
        }
    }


handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
}

handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
        disabled: true,
    })

    Axios.get("http://localhost:3001")
}


render() {
return (
    <Container>
        <Row>
        <Col md={8}>
        <Content>
            <Form onSubmit={this.handleSubmit} className="pt-5">
                <Form.Label>Search for Ideas</Form.Label>
                <Form.Group className="pt-5">
                    <Form.Label htmlFor="where">Indoor/Outdoor:</Form.Label>
                    <Form.Control id="where" name="where" type="text" value={this.state.where} onChange={this.handleChange}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="activeness">Activeness:</Form.Label>
                    <Form.Control id="activeness" name="activeness" type="text" value={this.state.activeness} onChange={this.handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="age">Age:</Form.Label>
                    <Form.Control id="age" name="age" type="text" value={this.state.age} onChange={this.handleChange}></Form.Control>
                </Form.Group>

                

                <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                    Search
                        </Button>
            </Form>
            
        </Content>
        
        </Col>
        <Col md={4} className="justify-content-left">
        <Event />
        </Col>
        </Row>
    </Container>
    )
}
}
export default SearchResults;