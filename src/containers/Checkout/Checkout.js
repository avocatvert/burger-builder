import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients:{
            bacon:1,
            cheese:1,
            salad:1,
            meat:1
        }
    }

    gotoBurgerBuilder = () => this.props.history.replace('/burger-builder');
    
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} cancel={this.gotoBurgerBuilder}/>
            </div>
        );
    }
}

export default Checkout;