import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from  "react-bootstrap/Col";
import logo from "../assets/images/logo.png";

function Footer() {


    return (
        <footer id="footer" >
<Container   fluid={true}>
    <Row className=" justify-content-center pt-1">
<Col className="text-center" >
<img id="logo" alt="logo" src={logo}/>
<p>Copyright © 2020 - Olena Turetska. All Rights Reserved.</p>
</Col>
    </Row>
</Container>
        </footer>
    );
}

export default Footer;