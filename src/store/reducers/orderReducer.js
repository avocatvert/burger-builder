import * as actionTypes from '../actions/actionTypes';

const initState = {
    orders:null,
    error:false,
    hasFetched:false
}
const reducer = (state = initState, action) => {

    switch (action.type) {

        case actionTypes.GET_ORDERS:
            
            return {
                ...state,
                hasFetched:true,
                orders: action.value,
                error:false
             }
        
        case actionTypes.FETCH_ORDERS_FAILED:
            return {...state, error: true, hasFetched:false}

        default: return state
    }
}


export default reducer;