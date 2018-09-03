import React ,{Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from "../../UI/Button/Button";
import Spinner from '../../UI/Spinner/Spinner';


//get actual price (sum of ingredientCount*ingredientPrice)+3.99
const getPrice = (ingredients) => {
    const DEFAULT_PRICE = 3.99;
    const prices = {
        cheese: 0.5,
        meat: 0.99,
        bacon: 0.5,
        salad: 0.3,
    };
    let price = Object.keys(prices)
        .map(k => prices[k] * ingredients[k])
        .reduce((a, b) => a + b);
    price = price > 0 ? price + DEFAULT_PRICE : price
    return price.toFixed(2);
};


//this component doesn't need to be a class but can be a functional component
class OrderSummary extends Component  {


    getSummary = (ingrdt) => (Object.keys(ingrdt).map(
        (x) => <li key={x}> 
                    <span style = {{textTransform:'capitalize'}}>{x}</span>: {ingrdt[x]} 
                </li> 
    )) 


 

    render(){
        const totalPrice = getPrice(this.props.ingredients)
        const SummaryDisplay=
            <Aux>
                <h3> Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {this.getSummary(this.props.ingredients)}
                </ul>
                <p><strong> Total price: ${totalPrice}</strong> </p>
                <p>Continue to checkout?</p>
                <Button clicked={this.props.cancel} btnType="Cancel">Cancel</Button>
                <Button clicked={this.props.continue} btnType="Continue"> Continue</Button>
            </Aux>
        return (
           this.props.spinMode ? <Spinner/> : SummaryDisplay
        )
    }
    

};

export default OrderSummary;
export {getPrice}