import * as actionTypes from "./actionTypes";



export const authStart = () => {
    return {type: actionTypes.AUTH_START}
}

export const authSucces = () => (
    {type : actionTypes.AUTH_SUCCESS}
)

export const authError = (error) => (
    {type:actionTypes.AUTH_ERROR, error}
)

const auth = (credentials) => {
    return (dispatch, getState) => {
        //async
        console.log(credentials);
        return dispatch(authSucces())
    }
}

export default auth;
