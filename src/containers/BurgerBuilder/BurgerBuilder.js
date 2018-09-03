import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger  from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary,{getPrice} from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = { 
                ingredients: {cheese:0,meat:0,bacon:0,salad:0},
                purchaseStarted:false,
                purchaseRunning: false
            };

    
    addIngredient = (type) => {
        const ingr = { ...this.state.ingredients }
        ingr[type]+=1

        this.setState({ingredients:ingr})
    };

    delIngredient = (type) => {
        const ingr = { ...this.state.ingredients }
        if (ingr[type] > 0) {
            ingr[type]-=1
        }
        
        this.setState({ingredients:ingr})
    };

    

    //check if at least one ingredient is added so An order can be finalise
    canStartPurchase = () => Object.values(this.state.ingredients).some(e => e >0);

    //check if builcontrols button should be disable (when no specific ingredient)
    disableButton = type => this.state.ingredients[type] === 0  ;

    startPurchase = () => (this.setState({purchaseStarted:true}))

    stopPurchase = () => (this.setState({
        purchaseStarted:false,
        purchaseRunning: false
    }))

    continuePurchase = () => {
            this.setState({purchaseRunning:true})
            this.sendingPurchase()
        }

    
    sendingPurchase = () => {
        const ingredients = this.state.ingredients
        const order = {
            ingredients: ingredients,
            price: getPrice(ingredients),
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
            .then(response => {console.log(response); this.stopPurchase()})
            .catch(error => {console.log(error); this.stopPurchase()})        
    }
        
    
    
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
                        continue={this.continuePurchase}
                        spinMode={this.state.purchaseRunning}
                        />

                </Modal>
                
                <Burger ingredients = {this.state.ingredients}/>
                
                <BuildControls 
                    totalPrice = {getPrice(this.state.ingredients)}
                    canCompleteOrder={this.canStartPurchase()}
                    decrement={this.delIngredient}
                    increment={this.addIngredient}
                    isDisabled={this.disableButton}
                    startPurchase={this.startPurchase}
                 />
            </Aux>
        )
    }

};

export default BurgerBuilder;