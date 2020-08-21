import React, { useEffect, useState } from 'react';
import APIideas from "../utils/APIideas";
import { useSelector } from "react-redux";
import axios from "axios"
import SavedIdeas from "../components/SavedIdeas";


export const UserSavedPlaces = () => {

    const [savedideas, setSavedPlaces] = useState([])

    useEffect(() => {
        loadUserPlaces()
    }, [])

    // load all the merch and set ot tp merch
    function loadUserPlaces() {
        APIideas.getUserPlaces().then(result => {
            console.log(result)
            setSavedPlaces(result.data)
        })
            .catch(err => console.log(err))
    }
    // access to the currentUser property from the auth reducer state
    const user = useSelector(state => state.auth.currentUser);
    useEffect(() => {
        axios.get("/api/dashboard/userplaces/" + user._id)
        .then(data => {
            console.log("this is saved place", data)
        })



    }, [])
    return (
        <>
           
            <div className="container">
                <div className="row"> 
               
                        {savedideas.map(idea => {
                            return (
                                <div className="col-md-4 col-sm-6">
                             <SavedIdeas
                                key={idea._id}
                                image={idea.image}
                                placename={idea.placename}
                                address={idea.address}
                                phone={idea.phone}
                                website={idea.website}

                                />
                                 </div>
                        )})}
                </div>
            </div>
        </>
    )
}

export default UserSavedPlaces;
