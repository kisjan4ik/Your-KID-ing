import React from 'react';
import { useSelector } from "react-redux";



export const Location = () => {
    // access to the currentUser property from the auth reducer state
    const user = useSelector(state => state.auth.currentUser);

    return (
        <>
            <p id="label2" >{user ? user.location : ""} or in another city?</p>
        </>
    )
}

export default Location;