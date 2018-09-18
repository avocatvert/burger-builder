import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        customer: {
            name: '',
            adress: {
                street: '',
                zipCode: '',
                country: ''
            },
            email: ''
        },
        sendingPurchase:false
    }

    sendData = (evt) => {
        evt.preventDefault();
        this.setState({
            purchaseRunning: true
        })
        this.sendingPurchase()
        
    }

    sendingPurchase = () => {
    
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'toto',
                adress: {
                    street: 'food street 1',
                    zipCode: '5555',
                    country: 'FoodLand'
                },
                email: 'eat@eatfood.com'
            },
            deliveryMethod: 'fastest'
        }
        //alert('You continue!')
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({purchaseRunning:false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({purchaseRunning:false});
                this.props.history.push('/');
            })
    }

    render() {

        return (
            this.state.purchaseRunning? <Spinner message='Saving Order...'/> 
            :
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                <form>
                    <input className={classes.Input} type='email' name='name' placeholder='Your email'/>
                    <input className={classes.Input} type='text' name='steet' placeholder='Street'/>
                    <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
                    <input className={classes.Input} type='text' name='zipCode' placeholder='Postal/zip code'/>
                    <input className={classes.Input} type='text' name='country' placeholder='Country'/>
                    <Button btnType='Continue' clicked={this.sendData}> ORDER </Button>
                </form>
            </div>
        );
    }
}

export default ContactData;