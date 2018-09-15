import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route,Switch, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Layout> 
        {/* <Checkout/>
        <BurgerBuilder/> */}

          <Switch>
            <Redirect from='/' to='/burger-builder' exact/>
            <Route path='/burger-builder' exact component={BurgerBuilder}/>
            <Route path='/checkout' component={Checkout}/>
          </Switch>
          
        </Layout>
      </div>
    );
  }
}

export default App;
