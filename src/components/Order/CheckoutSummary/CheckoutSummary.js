import React from 'react';
import Burger from '../../Burger/Burger';
import Aux from '../../../hoc/Aux/Aux';
import Summary,{getTotalPrice} from '../../Summary/Summary';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
    const totalPrice = getTotalPrice(props.ingredients)
        const SummaryDisplay=
            <Aux>
                <h3> Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {Summary(props.ingredients)}
                </ul>
                <p><strong> Total price: ${totalPrice}</strong> </p>
                <p>Continue to checkout?</p>
                <Button clicked={props.cancel} btnType="Cancel">Cancel</Button>
                <Button clicked={props.continue} btnType="Continue"> Continue</Button>
            </Aux>

    return (
        <div>
            <h1>We hope it tastes well!</h1>
            <Burger ingredients = {this.state.ingredients}/>
            {SummaryDisplay}
            
        </div>
    );
};

export default CheckoutSummary;