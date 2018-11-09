import React, { Component } from 'react';
import classes from './Signup.module.css';
import {connect} from 'react-redux';
import auth from '../../../store/actions/authActions';
import fields from './signup-config';
import Form from '../../../components/UI/Form/Form';


class Auth extends Component {

    state = {
        'todo':null
    }

    submit = (event) => { //TODOS
        event.preventDefault();
        const email = this.state.controls.email.value;
        const password = this.state.controls.password.value;
        return this.props.onAuth({email,password}) 
    }

    render() {
        return (
            <div className={classes.Signup}>
                <Form
                    title = {<h4>Burger Builder</h4>}
                    buttonLabel='Create account'
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