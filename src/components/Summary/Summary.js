import React from 'react';

//get actual price (sum of ingredientCount*ingredientPrice)+3.99
const getTotalPrice = (ingredients) => {
    if (ingredients ==null) return (0).toFixed(2)
    
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



 const Summary = (ingrdts) => (Object.keys(ingrdts).map(
        (x) => <li key={x}> 
                    <span style = {{textTransform:'capitalize'}}>{x}</span>: {ingrdts[x]} 
                </li> 
    )) 


export default Summary;
export {getTotalPrice};