import React ,{Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from "../../UI/Button/Button";
import Spinner from '../../UI/Spinner/Spinner';

import Summary, {getTotalPrice} from  '../../Summary/Summary';




//this component doesn't need to be a class but can be a functional component
class OrderSummary extends Component  {


    render(){
   
        const ingredients = this.props.ingredients;

        if (ingredients == null) return null;

        const totalPrice = getTotalPrice(ingredients)

        const SummaryDisplay=
            <Aux>
                <h3> Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {Summary(ingredients)}

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
