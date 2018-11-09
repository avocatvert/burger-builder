import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import ErrorOrEmpty from './ErrorOrEmpty';

import classes from './Orders.module.css';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/orderActions';


class Orders extends Component {
  

    parseOrders = () => {
        const orders = this.props.orders;
        const allorders = Object.keys(orders)
                .map(k =>  
                    {  
                        let d = orders[k]
                        return <Order key={k} ingredients = {d.ingredients}  price={d.price} /> 
                    } )
                return allorders 
    }

    componentDidMount = ()=>  { this.props.fetchOrders('orders.json'); }


    render() {
        const orderVsSpinnerVsNodata = 
        this.props.orders ? 
        this.parseOrders() :
        this.props.hasFetched ? 
        <ErrorOrEmpty message='No Orders History was Found ...'/> :
        this.props.error ? 
        <ErrorOrEmpty message='Sorry Orders Could not be Loaded...'/> :
        <Spinner message = 'Loading...' />


        return (
            <div className={classes.Orders}>
                { orderVsSpinnerVsNodata}
            </div>
        );
    }
}



const mapStateToProps = state => (
    {
        orders : state.orderRDUX.orders,
        hasFetched: state.orderRDUX.hasFetched,
        error : state.orderRDUX.error
    }
)

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders : (jsonFile) => dispatch( actions.fetchData(jsonFile) )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)( withErrorHandler(Orders,axios) );