import React, { useEffect, useState } from 'react';
import APIideas from "../utils/APIideas";
import { useSelector } from "react-redux";
import axios from "axios"
import SavedIdeas from "../components/SavedIdeas";


export const UserSavedPlaces = () => {

    const [savedplaces, setSavedPlaces] = useState([])

    useEffect(() => {
        loadUserPlaces()
    }, [])

    // load all the merch and set ot tp merch
    function loadUserPlaces() {
        APIideas.getUserPlaces(localStorage.getItem("id")).then(result => {
            console.log(result.data.savedplaces)
            setSavedPlaces(result.data.savedplaces)
        })
            .catch(err => console.log(err))
    }
    // access to the currentUser property from the auth reducer state
    const user = useSelector(state => state.auth.currentUser);
    useEffect(() => {
        axios.get("/api/ideas/dashboard/savedplaces/" + user._id)
        .then(data => {
            console.log("this is user id", user._id)
        })



    }, )
    return (
        <>
           
            <div className="container">
                <div className="row"> 
               
                        {savedplaces.map(idea => {
                            return (
                                <div className="col-md-4 col-sm-6">
                             <SavedIdeas 
                                // key={idea._id}
                                // image={idea.image}
                                // placename={idea.placename}
                                // address={idea.address}
                                // phone={idea.phone}
                                // website={idea.website}
                                savedplaces={savedplaces}

                                />
                                 </div>
                        )})}
                </div>
            </div>
        </>
    )
}

export default UserSavedPlaces;
