import React from 'react';
import Burger from '../../Burger/Burger';
import IngredientSummary from '../IngredientSummary';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const maskElement= (shouldmask) => (
    {display: shouldmask ? 'none' : null}
)

const CheckoutSummary = (props) => {
    
    const totalPrice = props.totalPrice;

    const SummaryDisplay=
        <div className={classes.SummaryText}
            style={maskElement(props.mask)}>

            <h3> Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                <IngredientSummary ingredients= {props.ingredients} />
            </ul>
            
            <Button clicked={props.cancel} btnType="Cancel">
                CANCEL
            </Button>
            <Button clicked={props.continue} btnType="Continue"> 
                CONTINUE
            </Button>

        </div>

    return ( 
        
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <p><strong> Total price: ${totalPrice}</strong> </p>
             <Burger ingredients = {props.ingredients}/> 
             
            {SummaryDisplay}
            
        </div>
    );
};



export default CheckoutSummary;
