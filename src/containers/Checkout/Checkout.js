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

    gobacktoBurgerBuilder = () => this.props.history.goBack();
    
    render() {
        console.log(this.props);
        
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} cancel={this.gobacktoBurgerBuilder}/>
            </div>
        );
    }
}

export default Checkout;