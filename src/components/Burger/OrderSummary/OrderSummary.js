import React ,{Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from "../../UI/Button/Button";

//this component doesn't need to be a class but can be a functional component
class OrderSummary extends Component  {


    getSummary = (ingrdt) => (Object.keys(ingrdt).map(
        (x) => <li key={x}> 
                    <span style = {{textTransform:'capitalize'}}>{x}</span>: {ingrdt[x]} 
                </li> 
    )) 
    
    // ---for lifecycle debug----
    // componentWillUpdate(){
    //     console.log('[OrderSummary update]');
        
    // }


    render(){
        return (
            <Aux>
                <h3> Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {this.getSummary(this.props.ingredients)}
                </ul>
                <p><strong> Total price: ${this.props.totalPrice}</strong> </p>
                <p>Continue to checkout?</p>
                <Button clicked={this.props.stopPurchasing} btnType="Cancel">Cancel</Button>
                <Button clicked={this.props.keepPurchasing} btnType="Continue"> Continue</Button>

            </Aux>
        )

    }
    

};

export default OrderSummary;