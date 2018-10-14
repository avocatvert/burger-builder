import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';



const getOrders = resp => (
    {
        type: actionTypes.GET_ORDERS,
        value : resp.data
    })


const fetchFailed = () => (
    {
        type:actionTypes.FETCH_ORDERS_FAILED
    }
)

export const fetchData = (jsonFile) => (

     (dispatch, getState) => (
        axios.get(jsonFile)
        .then(     
            (resp) => dispatch( getOrders(resp) )
        ).catch( (err) => {console.log('ERROR ', err) ;dispatch(fetchFailed())} )
     )
)