import React, { Component } from 'react';
import Order from '../../components/Order/Order';

import classes from './Orders.css';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';


class Orders extends Component {

    state={
       
        orders:null,
    }


    fetchOrders =() => {
        axios.get('/orders.json')
        .then((resp) => {
                            this.setState({
                                orders:resp.data,
                            }); 
                        }
        ).catch( err => console.error(err)
        )
    }


    parseOrders = () => {
        const orders = this.state.orders;
        const allorders = Object.keys(orders)
                .map(k =>  
                    {  
                        let d = orders[k]
                        return <Order key={k} ingredients = {d.ingredients}  price={d.price} /> 
                    } )
                return allorders 
    }

    componentDidMount = ()=>  { 
                this.fetchOrders(); 
            }

    render() {
        return (
            <div className={classes.Orders}>
                {
                    this.state.orders ? this.parseOrders() : <Spinner message='Loading...' />
                }

            </div>
        );
    }
}

export default withErrorHandler(Orders,axios);