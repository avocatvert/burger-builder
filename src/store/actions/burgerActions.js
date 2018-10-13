import * as actionTypes from './actionTypes';



export const addIngredient = ingT => ( {
    type: actionTypes.ADD_INGREDIENT,
    ingredientType: ingT
});

export const delIngredient = ingT => ({
    type: actionTypes.DEL_INGREDIENT,
    ingredientType: ingT
})

