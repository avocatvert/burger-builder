import * as actionTypes from '../actions/actionTypes';
import * as F from '../../components/Summary/summary-utils';

const initState = 
{
    ingredients: {bacon: 0,meat: 0,cheese: 0,salad: 0},
    totalPrice:0
}

const resetState = () => initState

const incrementIngredient = (state, ingType) => {
    const ingr_c = { ...state.ingredients}
    let totalPrice_c = F.set2default(state.totalPrice)

    ingr_c[ingType] += 1;
    totalPrice_c += F.Prices[ingType];

    return {ingredients:ingr_c, totalPrice: totalPrice_c}
  
};


const decrementIngredient = (state, ingType) => {
    const ingr_c = { ...state.ingredients}

    if (ingr_c[ingType] > 0) {
        let totalPrice_c = F.set2default(state.totalPrice)

        ingr_c[ingType] -= 1;
        totalPrice_c -= F.Prices[ingType];
        totalPrice_c = F.reset2zero(totalPrice_c)
        
        return {ingredients:ingr_c, totalPrice: totalPrice_c}
    }
    return state
};



const reducer = (state=initState, action) => {
    let newState = null;

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: 
            newState = incrementIngredient(state, action.ingredientType)
            return newState

        case actionTypes.DEL_INGREDIENT:
            newState =  decrementIngredient(state, action.ingredientType)
            return newState

        case actionTypes.RESET_INGREDIENTS: return resetState()

        default: return state
    }
    
}


export default reducer