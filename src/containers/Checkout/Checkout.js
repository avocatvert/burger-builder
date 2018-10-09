import React, { Component } from 'react';
import CheckoutSummary from '../../components/Summary/CheckoutSummary/CheckoutSummary';
import Aux from '../../hoc/Aux/Aux';

import Utils from '../../utils/utils';

import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

import {connect} from 'react-redux';

class Checkout extends Component {
    
    maskSummmary = false


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
         
            this.props.totalPrice ===0 ? 
                <h2 style={{textAlign:'center', margin:'25% auto', height:'50%'}}>
                    Nothing to checkout Please add ingredients first and complete order!
                </h2>
            :
                <Aux>
                    <CheckoutSummary 
                        totalPrice={this.props.totalPrice}
                        mask={this.maskSummmary}
                        ingredients={this.props.ingredients} 
                        cancel={this._goback2BurgerBuilder}
                        continue={this._go2ContactData}
                    />  
                    <Route path='/checkout/contact-data' 
                        render = { 
                            (props) => <ContactData {...props} 
                                        ingredients={this.props.ingredients} 
                                        totalPrice={this.props.totalPrice}
                                        />
                        }/>
                </Aux>
                   
        );
    }
}


const mapStateToProps = (state) => (
    {ingredients: state.ingredients, totalPrice: (+state.totalPrice).toFixed(2)}
)
export default connect(mapStateToProps)(Checkout);