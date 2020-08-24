import React from 'react';
import { useSelector } from "react-redux";
import SavedIdeas from "../components/SavedIdeas";




export const UserSavedPlaces = (props) => {
    const user = useSelector(state => state.auth.currentUser);

    return (

        <>

            <div className="container">
                <div className="row">
                    <div
                        className="col-md-12 col-sm-12"
                    >
                        <SavedIdeas
                            savedplaces={props.savedplaces}
                            deleteUserPlace={props.deleteUserPlace}
                            userId={user._id} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSavedPlaces;
