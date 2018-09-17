import React, { Component } from 'react';
import CheckoutSummary from '../../components/Summary/CheckoutSummary/CheckoutSummary';
import Aux from '../../hoc/Aux/Aux';

import Utils from '../../utils/utils';

import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.ingredients_ = Utils._getDataFromURLQuery(this.props.location.search)  

        this.maskSummmary=false
    }
    

    // state = {
    //     ingredients:null
    // }

    _gobacktoBurgerBuilder = () => this.props.history.replace('/burger-builder');
    _gotoContactData = () => {
        this.props.history.replace('/checkout/contact-data');
        this.maskSummmary=true
    };

    // use when component will mount (the url is already set with a query)
    // componentDidMount = () => this.setState({
    //     ingredients: Utils._getDataFromURLQuery(this.props.location.search)
    // });
    
    
   // --------------------life cycle hook ------------------------------
    shouldComponentUpdate = (next) => (
        Utils._isDiff(next.location.pathname, this.props.location.pathname) ||
        Utils._isDiff(next.location.search, this.props.location.search) 
        )    

    render() {   
        console.log('mask? ', this.maskSummmary);     
        return (
         
            Utils._isEmpty(this.ingredients_) ? 
                <h2 style={{textAlign:'center', margin:'25% auto', height:'50%'}}>
                    Nothing to checkout Please add ingredients first and complete order!
                </h2>
            :
                <Aux>
                    <CheckoutSummary 
                        mask={this.maskSummmary}
                        ingredients={this.ingredients_} 
                        cancel={this._gobacktoBurgerBuilder}
                        continue={this._gotoContactData}
                    />  
                    <Route path='/checkout/contact-data' component={ContactData}/>
                </Aux>
                   
        );
    }
}

export default Checkout;