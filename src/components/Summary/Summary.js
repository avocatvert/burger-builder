import React from 'react';

 const Prices = {
     cheese: 0.5,
     meat: 0.99,
     bacon: 0.5,
     salad: 0.3,
     default:3.99
 };

//get actual price (sum of ingredientCount*ingredientPrice)+3.99
const getTotalPrice = (ingredients) => {
    if (ingredients ==null) return (0).toFixed(2)
    
    const DEFAULT_PRICE = Prices.default;
   
    let price = Object.keys(ingredients)
        .map(k => Prices[k] * ingredients[k])
        .reduce((a, b) => a + b);
    price = price > 0 ? price + DEFAULT_PRICE : price
    return price.toFixed(2);
};


const isZeroPrice = (price) => +price===0 ;
const reset2zero = (price) =>  +price === Prices.default? (0).toFixed(2): +price ;
const set2default = (price) => +price ===0 ?  Prices.default : price ;


 const Summary = (ingrdts) => (Object.keys(ingrdts).map(
        (x) => <li key={x}> 
                    <span style = {{textTransform:'capitalize'}}>{x}</span>: {ingrdts[x]} 
                </li> 
    )) 



const Functions = {getTotalPrice, Prices, isZeroPrice, reset2zero,set2default} 

export default Summary;
export {Functions}