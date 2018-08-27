import React from 'react';
import BurgerIngredient from  './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

// -----BUILD THE BURGER -----
//loop over ingredients object ex obj = {'cheese':2} and build array 
// [<burgeringredient type ='cheese'>,<burgeringredient type='cheese'> ] of dim = 2 (obj['cheese'])
const getIngredientCombination = (ingrs) => {
    const ikeys =  Object.keys(ingrs);
    return ikeys.map(  (ikey) => { 
            let qty = ingrs[ikey];
            return [...Array(qty) ].map( (_,ix) => <BurgerIngredient key={ikey+ix} type={ikey} /> ) 

    }).reduce((a,b) => a.concat(b) )
    
}
const burger = (props) => {
    let ingredientsCombined = getIngredientCombination(props.ingredients);
    ingredientsCombined = !ingredientsCombined.length ?  <BurgerIngredient type=''/> : ingredientsCombined;

    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredientsCombined}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
};

export default burger;