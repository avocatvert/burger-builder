import * as actionTypes from '../actions/actionTypes';
const initState  = {
    login_error: null,
    login_start: null,
    login_success:null
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            console.log('SUCCESS');
            return {...state, login_error:null, login_start:null, login_success:true}
        case actionTypes.AUTH_ERROR:
            console.log('login error' , action.error);
            return {...state, login_error: true,login_start:null, login_success:null}
        case actionTypes.AUTH_START:
            console.log('Login ...');
            return {...state, login_start:true , login_error:null, login_success:null}
        default:
            return state
    }
}

export default reducer;