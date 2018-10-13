import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import orderForm from './orderForm';

import {connect} from 'react-redux';



class ContactData extends Component {

    state = {orderForm, sendingPurchase:false};


    _checkValidity = (value,required) =>{
        if(required){
            value = value.trim();
            const isMinLength = value.length >= 6
            const isMaxLength = value.length < 20
            return isMinLength && isMaxLength;
        }
        return true    
    }


    _allValid = () => (
       ! Object.values(this.state.orderForm.inputs)
        .some( (el) => !el.validation.isValid )
    )
                           

    _onInputChange = (event,id) => {
        const form = {...this.state.orderForm} //clone 
        const formInputs = {...form.inputs} //deep clone
        const elt = {...formInputs[id]} // deep clone 
        const eltValidation = {...elt.validation} // deep clone
        
        elt.value = event.target.value //update value of element
        elt.touched=true
        
        //only when validation check is required
        eltValidation.isValid = this._checkValidity(elt.value, eltValidation.required)
        elt.validation = eltValidation  //change copy
        
        
        formInputs[id] = elt  //update form.inputs with udpated element
        form.inputs = formInputs
        this.setState({orderForm : form })
    }

    sendData = (evt) => {
        evt.preventDefault();
        this.setState({
            purchaseRunning: true
        })
        this.sendingPurchase()
        
    }

    sendingPurchase = () => {
        const orderData ={};
        for (let k in this.state.orderForm.inputs){
            orderData[k]= this.state.orderForm.inputs[k].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            order:orderData
        };

        console.log(order);
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

                <form onSubmit = {this.sendData}>

                    {
                    Object.entries(this.state.orderForm.inputs).map( elt =>
                        <Input key = {elt[0]}
                            elementType={elt[1].elementType}
                            elementConfig= {elt[1].elementConfig } 
                            value={elt[1].value}
                            isValid={elt[1].validation.isValid}
                            touched ={elt[1].touched}
                            changed={ event => this._onInputChange(event,elt[0]) }
                            />
                        )
                    }
                        
                        <Button 
                            btnType='Continue' 
                            disabled={ !this._allValid() }>
                            ORDER 
                        </Button>

                </form>
                   
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: (+state.burgerBuilder.totalPrice).toFixed(2)
})

export default connect(mapStateToProps)(ContactData);