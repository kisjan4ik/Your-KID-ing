import React from 'react';
import { useSelector } from "react-redux";



export const Location = () => {
    // access to the currentUser property from the auth reducer state
    const user = useSelector(state => state.auth.currentUser);

    return (
        <>
            
                <p className="pt-5">{user ? user.location : ""}</p>
           

        </>
    )
}

export default Location;