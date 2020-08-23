import React from 'react'
import { LogoutUser } from "../actions/authActions";
import { useDispatch } from "react-redux";

const Logout = () => {
    const dispatch = useDispatch();
    return (
        <div id="nav"><a href="/" style={{ cursor: "pointer" }} id="item5" onClick={() => { dispatch(LogoutUser()) }}>
            <p id="right">Logout</p>
        </a></div>
    )
}

export default Logout;
