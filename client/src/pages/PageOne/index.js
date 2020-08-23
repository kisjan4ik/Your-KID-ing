import React from 'react';
import { Header, Message } from "semantic-ui-react";
import "./style.css";
import Event from "../../components/Event"


export const PageOne = () => {


    return (
        <>

            <Message id="head" className="message-container" size="huge" secondary="true">

                <Header id="font-pg1" size="huge"><p>Kids events</p>  </Header>
                <p id="subtitle1">in your area</p>
            </Message>

            <div id="events">
                <Event /></div>
        </>
    )

}

export default PageOne;
