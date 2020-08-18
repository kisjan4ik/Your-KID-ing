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
                <Header size="huge"> Home</Header>
                <p style={{ marginBottom: "5px" }}>Stay at home ideas.</p>
                <p style={{ margin: "5px 0 25px" }}>Here you can find ideas to entertain your kids at home: board games, arts/crafts ideas, educational materials and active indoor games ideas.</p>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </Message>
<HomeCard />
        </div>
    )
};

export default Home;
