import React, { Component } from 'react';
// import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Modal from '../../../components/UI/Modal/Modal';

import {connect} from 'react-redux';
import * as actions from '../../../store/actions/burgerActions';
import Form from '../../../components/UI/Form/Form';
import fields from './orderForm';



class ContactData extends Component {

    state = {
        isSendingData:false,
        showModal : true
    };


    sendData = (evt) => {
        evt.preventDefault();
        this.setState({
            isSendingData: true
        })
        this.sendingPurchase()
        
    }

    sendingPurchase = () => {  //TO CHANGE TO NEW FORM COMPONENT
        const orderData ={};
        for (let k in this.state.orderForm.inputs){
            orderData[k]= this.state.orderForm.inputs[k].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            order:orderData
        };

     
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({isSendingData:false});
                this.props.resetIngredients();
                this.props.history.push('/');    
            })
            .catch(error => {
                this.setState({isSendingData:false});
                this.props.resetIngredients();
                this.props.history.push('/');    
            })
    }

    closeModal = () => {
        if (this.isSendingData) return;
        this.setState({showModal:false});
        this.props.history.goBack();
    }

    render() {

        const contactDataSpinner = this.state.isSendingData?
        <Spinner message='Saving Order...'/> :
        <div >
            <Form 
            fields= {fields}
            buttonLabel = 'Send your order'
            title = { <h5> Enter your contact Data </h5>}
            /> 
        </div>

        return (
            <Modal 
            style = {{width: '500px', left: 'calc(50% - 250px)'}}
            show={this.state.showModal}
            close={this.closeModal}
            reRender={this.state.isSendingData}>
                {contactDataSpinner}  
            </Modal>    
        );
    }
}

const mapStateToProps = state => ({
    ingredients: state.burgerBuilderRDUX.ingredients,
    totalPrice: (+state.burgerBuilderRDUX.totalPrice).toFixed(2)
})


const mapDispatchToProps =  dispatch => ({
    resetIngredients : () => dispatch(actions.resetIngredients())
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactData);