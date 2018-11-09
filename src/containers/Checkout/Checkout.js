import React, { Component } from 'react';
import CheckoutSummary from '../../components/Summary/CheckoutSummary/CheckoutSummary';
import Utils from '../../utils/utils';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';


const BURGER_BUILDER_PATH = '/burger-builder';
const CONTACT_DATA_PATH = '/checkout/contact-data';

class Checkout extends Component {
    
    //state = {showContact:false };
    willMaskSummary = () => this.props.location.pathname === CONTACT_DATA_PATH || this.state.maskSummmary;

    _goback2BurgerBuilder = () => this.props.history.replace(BURGER_BUILDER_PATH);

    _go2ContactData = () => {
        this.props.history.replace(CONTACT_DATA_PATH);
        // this.setState({maskSummmary:true})
    };

    
   // --------------------life cycle hook ------------------------------
    shouldComponentUpdate = (next) => (
        Utils._isDiff(next.location.pathname, this.props.location.pathname) ||
        Utils._isDiff(next.location.search, this.props.location.search) 
        )    

    render() {   
        return (
            (+this.props.totalPrice) ===0 ? 
                <h2 style={{textAlign:'center', margin:'25% auto', height:'50%'}}>
                    Nothing to checkout Please add ingredients first and complete order!
                </h2>
            :
                <React.Fragment>
                    <CheckoutSummary 
                        totalPrice={this.props.totalPrice}
                        ingredients={this.props.ingredients} 
                        cancel={this._goback2BurgerBuilder}
                        continue={this._go2ContactData}
                    />  
                    <Route path='/checkout/contact-data' exact component={ContactData} />
                </React.Fragment>               
        );
    }
}


const mapStateToProps = state => ({
    ingredients: state.burgerBuilderRDUX.ingredients,
    totalPrice: (+state.burgerBuilderRDUX.totalPrice).toFixed(2)
})

export default connect(mapStateToProps)(Checkout);