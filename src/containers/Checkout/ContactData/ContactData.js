import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';


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
                    <Input inputtype='input' type='text' name='steet' placeholder='Street'/>
                    <Input inputtype='input' type='text' name='name' placeholder='Your Name'/>
                    <Input inputtype='input' type='text' name='zipCode' placeholder='Postal/zip code'/>
                    <Input inputtype='input' type='email' name='name' placeholder='Your email'/>
                    <Input inputtype='input' type='text' name='country' placeholder='Country'/>
                </form>
                   <Button btnType='Continue' clicked={this.sendData}> ORDER </Button>
            </div>
        );
    }
}

export default ContactData;