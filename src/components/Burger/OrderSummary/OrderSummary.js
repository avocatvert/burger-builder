import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from "../../UI/Button/Button";

const getSummary = (ingrdt) => (Object.keys(ingrdt).map(
    (x) => <li key={x}> 
                <span style = {{textTransform:'capitalize'}}>{x}</span>: {ingrdt[x]} 
            </li> 
)) 


const orderSummary = (props) => {
    return (
        <Aux>
            <h3> Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {getSummary(props.ingredients)}
            </ul>
            <p><strong> Total price: ${props.totalPrice}</strong> </p>
            <p>Continue to checkout?</p>
            <Button clicked={props.stopPurchasing} btnType="Cancel">Cancel</Button>
            <Button clicked={props.keepPurchasing} btnType="Continue"> Continue</Button>

        </Aux>
    )

};

export default orderSummary;