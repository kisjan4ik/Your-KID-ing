import React, { useEffect } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import PageOne from "../pages/PageOne";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NoMatch from "../pages/NoMatch";
import Particles from 'react-particles-js';
import Footer from "../components/Footer";

export const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Router history={history}>
                <Particles params={{
                    particles: {
                        color: {
                            value: [
                                "#529B88",
                                "#CDD180",
                                "#FFFA32",
                                "#FB6255",
                                "#FB4A53",
                                "#FF4E50",
                                "#F9D423",
                                "#FF00FF",
                                "#00FF00",
                                "#FFFF00",
                                "#0000FF"
                            ]
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "number": {
                            "value": 200,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 20,
                            "random": true,
                            "anim": {
                                "speed": 10,
                                "size_min": 0.3
                            }
                        }

                    }
                }}
                ></Particles>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRoute path="/dashboard" component={UserDashboard} />
                    <PrivateRoute path="/pageone" component={PageOne} />
                    <Route component={NoMatch} />
                </Switch>

            </Router>
            <Footer />
        </>
    )
}

export default App;
