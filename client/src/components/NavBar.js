import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export const NavBar = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    // helper to show links on Navbar if user is authenticated
    const showLinks = () => {
        if (isAuthenticated) {
            return (
                <>
                    <Link to="/dashboard" className="item " id="item3">{currentUser.nickname}'s places</Link>
                    <Logout />
                </>
            )
        } else {
            return (
                <div id="right">
                    
                    <Link to="/login" className="item" id="item4">Login</Link>
                    <Link to="/register" className="item" id="item4">Register</Link>
                </div>
            )
        }

    }

    return (
        <div className="ui  menu">
            <Link to="/" className="item" id="item1">At home ideas</Link>
            {isAuthenticated ? <Link to="/pageone" className="item" id="item2">Events</Link> : ""}
            <div className="right menu">
                {showLinks()}
            </div>
        </div>
    )
}

export default NavBar;
