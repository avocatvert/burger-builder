import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger  from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary,{getTotalPrice}from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = { 
                ingredients: null,
                purchaseStarted:false,
                purchaseRunning: false
            };

    hasIngredients = () => this.state.ingredients != null;

    addIngredient = (type) => {
        const ingr = { ...this.state.ingredients }
        if (this.hasIngredients()) {
            ingr[type]+=1
            this.setState({ingredients:ingr})
        }
        
    };

    delIngredient = (type) => {
        const ingr = { ...this.state.ingredients }

        if (this.hasIngredients() && ingr[type] > 0) {
            ingr[type]-=1
            this.setState({ingredients:ingr})
        }
        
        
    };

    

    //check if at least one ingredient is added so An order can be finalise
    canStartPurchase = () => (
        this.hasIngredients() && Object.values(this.state.ingredients).some(e => e >0)
    )


    //check if builcontrols button should be disable (when no specific ingredient)
    ingredientIsZero = type => (this.hasIngredients() &&  this.state.ingredients[type] === 0 ) ;

    startPurchase = () => (this.setState({purchaseStarted:true}))

    stopPurchase = () => (this.setState({
        purchaseStarted:false,
        purchaseRunning: false
    }))

    continuePurchase = () => {
            this.setState({purchaseRunning:true})
            this.sendingPurchase()
        }

    goToCheckout = () => this.props.history.push('/checkout')


    
    sendingPurchase = () => {
        const ingredients = this.state.ingredients
        const order = {
            ingredients: ingredients,
            price: getTotalPrice(ingredients),
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
            .then(response => { this.stopPurchase()})
            .catch(error => { this.stopPurchase()})        
    }

    /* life cycle hook */
    componentWillMount = () => {
        axios.get('/ingredients.json')
        .then(
            (response) => (this.setState({ingredients:response.data}))
        ).catch(error => error);
        
    }
    
    componentWillUpdate = () => {console.log('WILL UPDATE');}
    
    render() {
                
        return (
            <Aux>
                <Modal 
                    show={this.state.purchaseStarted}
                    close={this.stopPurchase}
                    reRender={this.state.purchaseRunning}>

                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        cancel={this.stopPurchase}
                        continue={this.goToCheckout}
                        spinMode={this.state.purchaseRunning}
                        />

                </Modal>
                
                <Burger ingredients={this.state.ingredients}/>
                
                <BuildControls 
                    totalPrice = {getTotalPrice(this.state.ingredients)}
                    canCompleteOrder={this.canStartPurchase()}
                    decrement={this.delIngredient}
                    increment={this.addIngredient}
                    isDisabled={this.ingredientIsZero}
                    startPurchase={this.startPurchase}
                 />
            </Aux>
        )
    }

};

export default withErrorHandler(BurgerBuilder,axios);
//export default BurgerBuilder;