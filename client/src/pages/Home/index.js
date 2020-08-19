import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeCard from '../../components/HomeCard';


export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <>
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
                
                </>
            )
        }
    }

    return (
        <div>
            <Message className="message-container" size="huge" secondary="true">
                <Header className="games" size="huge" style={{ marginBottom: "35px", fontSize: "44px" , fontFamily: "Indie Flower, cursive"}}>Stay at home ideas.</Header>
                <p className="games" style={{ margin: "5px 0 25px", fontSize: "26px" }}>Here you can find ideas to entertain your kids at home: </p>
                
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </Message>
<HomeCard />
        </div>
    )
};

export default Home;
