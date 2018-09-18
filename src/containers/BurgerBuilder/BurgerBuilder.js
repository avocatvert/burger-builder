import React, {Component} from 'react';
 import {Route} from 'react-router-dom';
// import UTILS from '../../utils/utils';
import Aux from '../../hoc/Aux/Aux';
import Burger  from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary,{getTotalPrice}from '../../components/Summary/BurgerSummary/BurgerSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = { 
                ingredients:{bacon:0,meat:0,cheese:0,salad:0},
                purchaseStarted:false,
                purchaseRunning: false,
                query:''
            };
    totalPrice=(0).toFixed(2);        

    hasIngredients = () => this.state.ingredients != null;
 
/* --------------BUILD CONTROLS ACTIVITIES SECTION -----------------*/
    addIngredient = (type) => {
        const ingr = { ...this.state.ingredients }
        if (this.hasIngredients()) {
            ingr[type]+=1
            this.setState({ingredients:ingr})
        }
        
    };

    delIngredient = (type) => {
        const ingr = { ...this.state.ingredients }

        if (this.hasIngredients() && ingr[type] > 0) {
            ingr[type]-=1
            this.setState({ingredients:ingr})
        }   
    };

    //check if at least one ingredient is added so An order can be finalise
    canStartPurchase = () => this.hasIngredients() && Object.values(this.state.ingredients).some(e => e >0)
    
    //check if builcontrols button should be disable (when no specific ingredient)
    isCountZero = type => (this.hasIngredients() &&  this.state.ingredients[type] === 0 ) ;

    //launch burgerbuilder Modal
    startPurchase = () => {
        const query_ = this.ingredients2UrlQuery()
        this.setState({purchaseStarted:true, query:query_})
        
        this.setOrderUrl(query_)     
        
        this.totalPrice = getTotalPrice(this.state.ingredients)
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
    enc = (x) => encodeURIComponent(x)

    ingredients2UrlQuery = () => (
            Object.entries(this.state.ingredients)
            .map((x) => this.enc(x[0]) + '=' + this.enc(x[1]))
            .join('&')
    )

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
                            totalPrice={this.totalPrice}
                            ingredients={this.state.ingredients}
                            cancel={this.stopPurchase}
                            continue={this.setCheckoutUrl}
                            spinMode={this.state.purchaseRunning}
                            />
                    </Modal>
                }/>                
                
                <Burger ingredients={this.state.ingredients}/>
                
                <BuildControls 
                    totalPrice = {this.totalPrice}
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