import React ,{Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from "../../UI/Button/Button";
import Spinner from '../../UI/Spinner/Spinner';

import Summary, {getTotalPrice} from  '../../Summary/Summary';


//get actual price (sum of ingredientCount*ingredientPrice)+3.99
<<<<<<< Updated upstream
const getPrice = (ingredients) => {
    if (ingredients === null) return (0).toFixed(2);
    const DEFAULT_PRICE = 3.99;
    const prices = {
        cheese: 0.5,
        meat: 0.99,
        bacon: 0.5,
        salad: 0.3,
    };
    let price = Object.keys(prices)
        .map(k => prices[k] * ingredients[k]).reduce((a, b) => a + b);
    price = price > 0 ? price + DEFAULT_PRICE : price
    return price.toFixed(2);
};
=======

>>>>>>> Stashed changes


//this component doesn't need to be a class but can be a functional component
class OrderSummary extends Component  {


<<<<<<< Updated upstream
    getSummary = (ingrdt) => (Object.keys(ingrdt).map(
        (x) => <li key={x}> 
                    <span style = {{textTransform:'capitalize'}}>{x}</span>: {ingrdt[x]} 
                </li> 
    )) 



    render(){
        const ingredients = this.props.ingredients;

        if (ingredients == null) return null;

        const totalPrice = getPrice(ingredients)
=======
    render(){
        const totalPrice = getTotalPrice(this.props.ingredients)
>>>>>>> Stashed changes
        const SummaryDisplay=
            <Aux>
                <h3> Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
<<<<<<< Updated upstream
                    {this.getSummary(ingredients)}
=======
                    {Summary(this.props.ingredients)}
>>>>>>> Stashed changes
                </ul>
                <p><strong> Total price: ${totalPrice}</strong> </p>
                <p>Continue to checkout?</p>
                <Button clicked={this.props.cancel} btnType="Cancel">Cancel</Button>
                <Button clicked={this.props.continue} btnType="Continue"> Continue</Button>
            </Aux>
        return (
           this.props.spinMode ? <Spinner message='Sending...'/> : SummaryDisplay
        )
    }
    

};

export default OrderSummary;
export {getTotalPrice};