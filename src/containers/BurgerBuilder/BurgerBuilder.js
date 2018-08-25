import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger  from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {


    state = { 
                ingredients: {cheese:0,meat:0,bacon:0,salad:0},
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
       const price =  Object.keys(this.prices)
        .map(k => this.prices[k]*this.state.ingredients[k])
        .reduce( (a,b) => a+b);
       return price > 0 ? price + this.DEFAULT_PRICE : price
    };

    //check if at least one ingredient is added so An order can be finalise
    canCompleteOrder = () => Object.values(this.state.ingredients).some(e => e >0);

    //check if builcontrols button should be disable (when no specific ingredient)
    willButtonDisable = type => this.state.ingredients[type] === 0  ;

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    totalPrice = {this.getPrice()}
                    canCompleteOrder={this.canCompleteOrder()}
                    decrement={this.delIngredient}
                    increment={this.addIngredient}
                    isDisabled={this.willButtonDisable}
                 />
            </Aux>
        )
    }

};

export default BurgerBuilder;