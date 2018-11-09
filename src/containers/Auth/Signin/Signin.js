import React, { Component } from 'react';
import classes from './Signin.module.css';
import {connect} from 'react-redux';
import auth from '../../../store/actions/authActions';
import fields from './signin-config';
import Form from '../../../components/UI/Form/Form';


class Auth extends Component {

    state = {
        'todo':null
    }

    submit = (event) => {
        event.preventDefault();
        const email = this.state.controls.email.value;
        const password = this.state.controls.password.value;
        return this.props.onAuth({email,password})
    }

    render() {
        return (
            <div className={classes.Signin}>
                <Form
                    title = {<h2>Burger Builder </h2>}
                    buttonLabel='Sign in'
                    fields={fields}
                />
            </div>
        );
    }
}


const mapDispatchToProps =(dispatch) => (
    {
        onAuth : (credentials) => dispatch(auth(credentials))
    }
)

export default connect(null,mapDispatchToProps)(Auth);