import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger  from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = { 
                ingredients: {cheese:0,meat:0,bacon:0,salad:0},
                purchasing:false
            };

    DEFAULT_PRICE=3.99;
    prices = {
        cheese: 0.5,
        meat: 0.99,
        bacon: 0.5,
        salad: 0.3,
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

    //get actual price (sum of ingredientCount*ingredientPrice)+3.99
    getPrice = () => {
       let price =  Object.keys(this.prices)
        .map(k => this.prices[k]*this.state.ingredients[k])
        .reduce( (a,b) => a+b);
       price =  price > 0 ? price + this.DEFAULT_PRICE : price
       return price.toFixed(2);
    };

    //check if at least one ingredient is added so An order can be finalise
    canCompleteOrder = () => Object.values(this.state.ingredients).some(e => e >0);

    //check if builcontrols button should be disable (when no specific ingredient)
    willButtonDisable = type => this.state.ingredients[type] === 0  ;
    isPurchasing = () => (this.setState({purchasing:true}))
    stopPurchasing = () => (this.setState({purchasing:false}))

    keepPurchasing = () => {
        const order = {
            ingredients:this.state.ingredients,
            price:this.getPrice(),
            customer:{
                name:'toto',
                adress:{
                    street:'food street 1',
                    zipCode:'5555',
                    country:'FoodLand'
                },
                email:'eat@eatfood.com'
            },
            deliveryMethod:'fastest'
        }
        //alert('You continue!')
        axios.post('/orders.json', order)
            .then(response => console.log(response)
            .catch(error => console.log(error))
            )
    }

    render() {
        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing}
                    closeModal={this.stopPurchasing}>

                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        totalPrice ={this.getPrice()}
                        stopPurchasing={this.stopPurchasing}
                        keepPurchasing={this.keepPurchasing}
                        />

                </Modal>
                
                <Burger ingredients = {this.state.ingredients}/>
                
                <BuildControls 
                    totalPrice = {this.getPrice()}
                    canCompleteOrder={this.canCompleteOrder()}
                    decrement={this.delIngredient}
                    increment={this.addIngredient}
                    isDisabled={this.willButtonDisable}
                    isPurchasing={this.isPurchasing}
                 />
            </Aux>
        )
    }

};

export default BurgerBuilder;