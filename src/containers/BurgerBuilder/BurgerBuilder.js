import React, {Component} from 'react';
 import {Route} from 'react-router-dom';
import utils from '../../utils/utils';
import Aux from '../../hoc/Aux/Aux';
import Burger  from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary from '../../components/Summary/BurgerSummary/BurgerSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';


class BurgerBuilder extends Component {
    state = { 
                purchaseStarted:false,
                purchaseRunning: false,
                query:''
            };

    
    
 
/* --------------BUILD CONTROLS ACTIVITIES SECTION -----------------*/
  
    //check if at least one ingredient is added so An order can be finalise
    canStartPurchase = () =>  Object.values(this.props.ingredients).some(e => e >0)
    
    //check if builcontrols button should be disable (when no specific ingredient)
    isCountZero = type => (this.props.ingredients[type] === 0 ) ;

    //launch burgerbuilder Modal
    startPurchase = () => {
        const query_ = utils._data2UrlQuery(this.props.ingredients)
        this.setState({purchaseStarted:true, query:query_})
        
        this.setOrderUrl(query_)     
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
    //   componentDidMount = () => {
    //       if (!this.state.ingredients ) {
              
    //         axios.get('/ingredients.json')
    //             .then(
    //                 (response) => (this.setState({
    //                     ingredients: response.data
    //                 }))
    //             ).catch(error => error);
    //       }
    //   }

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
                            totalPrice={this.props.totalPrice}
                            ingredients={this.props.ingredients}
                            cancel={this.stopPurchase}
                            continue={this.setCheckoutUrl}
                            spinMode={this.state.purchaseRunning}
                            />
                    </Modal>
                }/>                
                
                <Burger ingredients={this.props.ingredients}/>
                
                <BuildControls 
                    totalPrice = {this.props.totalPrice}
                    canCompleteOrder={this.canStartPurchase()}
                    decrement={this.props.delIngredient}
                    increment={this.props.addIngredient}
                    isDisabled={this.isCountZero}
                    startPurchase={this.startPurchase}
                 />
            </Aux>
        )
    }

};





const mapStateToProps = state => (
    {
        ingredients: state.ingredients,
        totalPrice: (+state.totalPrice).toFixed(2)
    }
)


const mapDispacthToProps = dispatch => (
    {
        addIngredient: (ingT) => dispatch( {type: actionTypes.ADD_INGREDIENT, ingredientType: ingT } ),
        delIngredient : (ingT) => dispatch( {type: actionTypes.DEL_INGREDIENT , ingredientType: ingT} )
    }
)

export default connect(mapStateToProps, mapDispacthToProps) (withErrorHandler(BurgerBuilder,axios)) ;
//export default BurgerBuilder;