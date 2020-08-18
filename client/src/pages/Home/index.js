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
                <Header size="huge" style={{ marginBottom: "5px", fontSize: "24px" }}>Stay at home ideas.</Header>
                <p style={{ margin: "5px 0 25px", fontSize: "26px" }}>Here you can find ideas to entertain your kids at home: </p>
                <p style={{ margin: "5px 0 25px", fontSize: "26px" }}> board games, arts/crafts ideas, educational materials and active indoor games ideas.</p>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </Message>
<HomeCard />
        </div>
    )
};

export default Home;
