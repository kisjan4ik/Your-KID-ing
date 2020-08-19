import React from 'react';
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import SearchResults from "../../components/SearchResults";



export const UserDashboard = () => {
    // access to the currentUser property from the auth reducer state
    const user = useSelector(state => state.auth.currentUser);

    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header  id="font-user" size="huge"> <p id="font"> {user ? user.nickname : ""}, welcome </p></Header>
                <p id="subtitle"> to Your KID-ing App</p>
                
            </Message>
           
<SearchResults />
        </>
    )
}

export default UserDashboard;
