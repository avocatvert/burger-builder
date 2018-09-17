import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        adress: {
            street: '',
            zipCode: '',
            country: ''
        },
        email: ''
    }


    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                <form>
                    <input className={classes.Input} type='email' name='name' placeholder='Your email'/>
                    <input className={classes.Input} type='text' name='steet' placeholder='Street'/>
                    <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
                    <input className={classes.Input} type='text' name='zipCode' placeholder='Postal/zip code'/>
                    <input className={classes.Input} type='text' name='country' placeholder='Country'/>
                    <Button btnType='Continue'> ORDER </Button>
                </form>
            </div>
        );
    }
}

export default ContactData;