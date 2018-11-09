import React ,{Component} from 'react';
import Button from "../../UI/Button/Button";
import Spinner from '../../UI/Spinner/Spinner';
import IngredientSummary from '../IngredientSummary';




//this component doesn't need to be a class but can be a functional component
class BurgerSummary extends Component  {


    render(){
   
        const {ingredients, totalPrice} = this.props;

        if (ingredients == null) return null;

        const SummaryDisplay=
            <React.Fragment>
                <h3> Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    <IngredientSummary ingredients={ingredients}/>
                </ul>
                <p><strong> Total price: ${totalPrice}</strong> </p>
                <p>Continue to checkout?</p>
                <Button clicked={this.props.cancel} btnType="Cancel">Cancel</Button>
                <Button clicked={this.props.continue} btnType="Continue"> Continue</Button>
            </React.Fragment>
        return (
           this.props.spinMode ? <Spinner message='Sending...'/> : SummaryDisplay
        )
    }
    

};

export default BurgerSummary;
