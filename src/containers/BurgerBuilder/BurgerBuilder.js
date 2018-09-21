import React, {Component} from 'react';
 import {Route} from 'react-router-dom';
import utils from '../../utils/utils';
import Aux from '../../hoc/Aux/Aux';
import Burger  from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary,{Functions as F} from '../../components/Summary/BurgerSummary/BurgerSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = { 
                ingredients:{bacon:0,meat:0,cheese:0,salad:0},
                purchaseStarted:false,
                purchaseRunning: false,
                query:''
            };
    totalPrice= 0;

    
    showTotalPrice = () => (+this.totalPrice).toFixed(2);

    hasIngredients = () => this.state.ingredients != null;
 
/* --------------BUILD CONTROLS ACTIVITIES SECTION -----------------*/
    addIngredient = (type) => {
        const ingr = { ...this.state.ingredients }
        if (this.hasIngredients()) {
            this.totalPrice = F.set2default(this.totalPrice)
            
            ingr[type]+=1;
            this.totalPrice += F.Prices[type];
            //this.totalPrice = this.totalPrice.toFixed(2)
            this.setState({ingredients:ingr});
        }
        
    };

    delIngredient = (type) => {
        const ingr = { ...this.state.ingredients }

        if (this.hasIngredients() && ingr[type] > 0) {
            this.totalPrice = F.set2default(this.totalPrice)

            ingr[type]-=1;
            this.totalPrice -= F.Prices[type];
            this.totalPrice = F.reset2zero(this.totalPrice)
            //this.totalPrice = this.totalPrice.toFixed(2)
            this.setState({ingredients:ingr});
        }   
    };

    //check if at least one ingredient is added so An order can be finalise
    canStartPurchase = () => this.hasIngredients() && Object.values(this.state.ingredients).some(e => e >0)
    
    //check if builcontrols button should be disable (when no specific ingredient)
    isCountZero = type => (this.hasIngredients() &&  this.state.ingredients[type] === 0 ) ;

    //launch burgerbuilder Modal
    startPurchase = () => {
        const query_ = utils._data2UrlQuery(this.state.ingredients)
        this.setState({purchaseStarted:true, query:query_})
        
        this.setOrderUrl(query_)     
        
        this.totalPrice = F.calcPrice(this.state.ingredients)
    }

    stopPurchase = () => (this.setState({
        purchaseStarted:false,
        purchaseRunning: false
    }))

    setOrderUrl = (query) => {
        this.props.history.push({
            pathname: '/burger-builder/order',
            search: query
        })
    }


/*---------------------------------QUERY PARAMS SECTION-----------------------------*/

    setCheckoutUrl = () => {

        this.props.history.push({
            pathname: '/checkout',
            search: this.state.query
        })
    }
/*-----------------------------------------------------------------------------------*/
  

/*----------------- life cycle hook ------------------*/
      componentDidMount = () => {
          if (!this.state.ingredients ) {
              
            axios.get('/ingredients.json')
                .then(
                    (response) => (this.setState({
                        ingredients: response.data
                    }))
                ).catch(error => error);
          }
      }

    // componentDidUpdate = () => {console.log('WILL UPDATE ',this.props.history);}
    // shouldComponentUpdate = (next) => {
    //     return next.history.
    // };


    //---------------RENDER------------------------// 
    
    render() {
                   
        return (
            <Aux>
                <Route path={'/burger-builder/order'} render = { () => 
                    <Modal 
                        show={this.state.purchaseStarted}
                        close={this.stopPurchase}
                        reRender={this.state.purchaseRunning}>

                        <BurgerSummary 
                            totalPrice={this.showTotalPrice()}
                            ingredients={this.state.ingredients}
                            cancel={this.stopPurchase}
                            continue={this.setCheckoutUrl}
                            spinMode={this.state.purchaseRunning}
                            />
                    </Modal>
                }/>                
                
                <Burger ingredients={this.state.ingredients}/>
                
                <BuildControls 
                    totalPrice = {this.showTotalPrice()}
                    canCompleteOrder={this.canStartPurchase()}
                    decrement={this.delIngredient}
                    increment={this.addIngredient}
                    isDisabled={this.isCountZero}
                    startPurchase={this.startPurchase}
                 />
            </Aux>
        )
    }

};

export default withErrorHandler(BurgerBuilder,axios);
//export default BurgerBuilder;