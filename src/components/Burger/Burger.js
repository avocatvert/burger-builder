import React from 'react';
import BurgerIngredient from  './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';


//loop over ingredients object ex obj = {'cheese':2} and build array 
// [<burgeringredient type ='cheese'>,<burgeringredient type='cheese'> ] of dim = 2 (obj['cheese'])
const getIngredientCombination = (ingrs) => {
    const ikeys =  Object.keys(ingrs);
    return ikeys.map(  (ikey) => { 
            let qty = ingrs[ikey];
            return [...Array(qty) ].map( (_,ix) => <BurgerIngredient key={ikey+ix} type={ikey} /> ) 

    })
    
}
const burger = (props) => {
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {getIngredientCombination(props.ingredients)}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
};

export default burger;