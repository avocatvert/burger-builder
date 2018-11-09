import utils from '../../utils/utils';


export const Prices = {
     cheese: 0.50,
     meat: 0.99,
     bacon: 0.50,
     salad: 0.30,
     default:3.99
 };


export  const round2 =(v) => +((+v).toFixed(2))


//get actual price (sum of ingredientCount*ingredientPrice)+3.99
export const calcPrice = (ingredients) => {
  
    if (utils._isEmpty(ingredients)) return (0).toFixed(2)
    
    const DEFAULT_PRICE = Prices.default;
   
    let price = Object.keys(ingredients)
        .map(k => Prices[k] * ingredients[k])
        .reduce((a, b) => a + b);
    price = price > 0 ? price + DEFAULT_PRICE : price
    return price.toFixed(2);
};


export const isZeroPrice = (price) => round2(price) ===0 ;
export const reset2zero = (price) =>  round2(price) === Prices.default? (0).toFixed(2): +price ;
export const set2default = (price) => isZeroPrice(price) ?  Prices.default : price ;

