import React from 'react';
import BurgerIngredient from  './BurgerIngredient/BurgerIngredient';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Burger.css';

// -----BUILD THE BURGER -----
//loop over ingredients object ex obj = {'cheese':2} and build array 
// [<burgeringredient type ='cheese'>,<burgeringredient type='cheese'> ] of dim = 2 (obj['cheese'])

const combineIngredients = (ingrs) => {

    const ikeys =  Object.keys(ingrs);
    return ikeys.map(  (ikey) => { 
            let qty = ingrs[ikey];
            return [...Array(qty) ].map( (_,ix) => <BurgerIngredient key={ikey+ix} type={ikey} /> ) 

    }).reduce((a,b) => a.concat(b) )
    
}
const burger = (props) => {
    if (props.ingredients == null) return <Spinner message='Loading...'/>
    
    let ingredientsCombined = combineIngredients(props.ingredients);
    ingredientsCombined = !ingredientsCombined.length ?  <BurgerIngredient type=''/> : ingredientsCombined;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredientsCombined}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
};

export default burger;