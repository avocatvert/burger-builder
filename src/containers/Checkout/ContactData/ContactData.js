import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component {
    state = {

        orderForm: {

            name:{
                elementType:'input',
                elementConfig: {
                    type : 'text',
                    placeholder :'Your Name'
                },
                 value: ''
            } ,


            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            }, 


            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip/Postal Code'
                },
                value: ''
            },
            
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            }, 
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-mail'
                },
                value: ''
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{ options: [{value:'fasttest', children:'Fasttest'},
                                            {value:'cheapest', children:'Cheapest'} ]
                                },
                value:'Fasttest'
            }

        }, //orderForm
        sendingPurchase:false
    }//State


    _onInputChange = (event,id) => {
        const form = {...this.state.orderForm} //clone 
        const formElement = {...form[id]} // deep clone into a form element

        formElement.value = event.target.value //update value of element
        form[id] = formElement  //update form with udpated element
        
        this.setState({orderForm:form})
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
        for (let k in this.state.orderForm){
            orderData[k]= this.state.orderForm[k].value;
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

                <form>


                {
                Object.entries(this.state.orderForm).map( form =>
                    <Input key = {form[0]}
                        elementType={form[1].elementType}
                        elementConfig= {form[1].elementConfig } 
                        value={form[1].value}
                        changed={ event => this._onInputChange(event,form[0]) }
                        />
                    )
                }
                    
                    <Button btnType='Continue' clicked={this.sendData}> ORDER </Button>

                </form>
                   
            </div>
        );
    }
}

export default ContactData;