
import React from 'react';
import { Header } from 'semantic-ui-react';
import RegisterForm from "../../components/RegisterForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";

const Register = () => {

    const dispatch = useDispatch();

    const renderFormMessage = () => {
        return <><p id="login1">Already Registered ? </p><Link to="/login"><p id="login2">Login</p></Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(registerUser(formVal));
    }

    return (

        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                <p id="login">Register</p>
            </Header>
            <RegisterForm
                renderMessage={renderFormMessage}
                buttonText="Register"
                onSubmit={onFormSubmit}
            />
        </div>
    )
}

export default Register;