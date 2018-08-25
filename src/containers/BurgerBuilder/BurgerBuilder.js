import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger  from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {


    state = { 
                ingredients: {cheese:0,meat:0,bacon:0,salad:0}
            };

    addIngredient = (type) => {
        const ingr = { ...this.state.ingredients }
        ingr[type]+=1

        this.setState({ingredients:ingr})
    };

    delIngredient = (type) => {
        const ingr = { ...this.state.ingredients }
        if (ingr[type] > 0) {
            ingr[type]-=1
        }
        
        this.setState({ingredients:ingr})
    };

    willButtonDisable = type => this.state.ingredients[type] === 0  ;

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    decrement={this.delIngredient}
                    increment={this.addIngredient}
                    isDisabled={this.willButtonDisable}
                 />
            </Aux>
        )
    }

};

export default BurgerBuilder;