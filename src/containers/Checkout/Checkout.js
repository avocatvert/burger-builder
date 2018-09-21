import React, { Component } from 'react';
import CheckoutSummary,{Functions as F} from '../../components/Summary/CheckoutSummary/CheckoutSummary';
import Aux from '../../hoc/Aux/Aux';

import Utils from '../../utils/utils';

import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.ingredients = Utils._getDataFromURLQuery(props.location.search)  

        this.maskSummmary=false

        this.totalPrice = F.calcPrice(this.ingredients)
    }
    

    // state = {
    //     ingredients:null
    // }

    _goback2BurgerBuilder = () => this.props.history.replace('/burger-builder');
    _go2ContactData = () => {
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

        return (
         
            Utils._isEmpty(this.ingredients) ? 
                <h2 style={{textAlign:'center', margin:'25% auto', height:'50%'}}>
                    Nothing to checkout Please add ingredients first and complete order!
                </h2>
            :
                <Aux>
                    <CheckoutSummary 
                        totalPrice={this.totalPrice}
                        mask={this.maskSummmary}
                        ingredients={this.ingredients} 
                        cancel={this._goback2BurgerBuilder}
                        continue={this._go2ContactData}
                    />  
                    <Route path='/checkout/contact-data' 
                        render = { 
                            (props) => <ContactData {...props} ingredients={this.ingredients} totalPrice={this.totalPrice}/>
                        }/>
                </Aux>
                   
        );
    }
}

export default Checkout;