import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import Orders from './containers/Orders/Orders';


import {Route,Switch, Redirect} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <Layout> 
        {/* <Checkout/>
        <BurgerBuilder/> */}

          <Switch>
            <Redirect from='/' to='/burger-builder' exact />
            <Route path='/burger-builder'  component={BurgerBuilder}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/checkout' component={Checkout}/>
            <Route component={NotFound}/>
          </Switch>
          
        </Layout>
      </div>
    );
  }
}

export default App;
