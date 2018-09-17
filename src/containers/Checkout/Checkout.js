import React, { Component } from 'react';
import CheckoutSummary from '../../components/Summary/CheckoutSummary/CheckoutSummary';
import UTILS from '../../utils/utils';

class Checkout extends Component {

    // state = {
    //     ingredients:{
    //         bacon:1,
    //         cheese:1,
    //         salad:1,
    //         meat:1
    //     }
    // }

    _gobacktoBurgerBuilder = () => this.props.history.replace('/burger-builder');
    _gotoContactData = () => this.props.history.replace('/checkout/contact-data');

    // use when component will mount (the url is already set with a query)
    
   // --------------------life cycle hook ------------------------------
    componentWillMount = () => {this.ingredients_ = UTILS._getDataFromURLQuery(this.props.history.location.search)}
    shouldComponentUpdate = (next) => UTILS._isDiff(next.history.location.search, this.props.history.location.search)
    
    

    render() {
        
        return (
            UTILS._isEmpty(this.ingredients_) ? 
                <h2 style={{textAlign:'center', margin:'25% auto', height:'50%'}}>
                    Nothing to checkout Please add ingredients first and complete order!
                </h2>
            :
                <CheckoutSummary 
                    ingredients={this.ingredients_} 
                    cancel={this._gobacktoBurgerBuilder}
                    continue={this._gotoContactData}
                />     
        );
    }
}

export default Checkout;