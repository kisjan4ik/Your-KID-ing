import React from 'react';
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import SearchResults from "../../components/SearchResults";


export const UserDashboard = () => {
    // access to the currentUser property from the auth reducer state
    const user = useSelector(state => state.auth.currentUser);

    return (
        <>
            <Message id="head" className="message-container" size="huge" secondary="true">
                <Header id="font-user" size="huge"> <p id="font"> {user ? user.nickname : ""}, welcome </p></Header>
                <p id="subtitle"> to Your KID-ing App</p>
                <p id="subtitle"> Find a place, activity or idea to entertain your kids</p>


            </Message>
            <SearchResults />
            {/* <UserSavedPlaces /> */}


        </>
    )
}

export default UserDashboard;
