import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import Orders from './containers/Orders/Orders';
import Signin from './containers/Auth/Signin/Signin';
import Signup from './containers/Auth/Signup/Signup';



import {Route,Switch, Redirect} from 'react-router-dom';
import Form from './components/UI/Form/Form';



class App extends Component {
  render() {
    return (
      <div>
        <Layout> 
          <Switch>
            <Redirect from='/' to='/burger-builder' exact />
            <Route path='/burger-builder'  component={BurgerBuilder}/>
            <Route path='/login' exact component={Signin}/> 
            <Route path='/signup' exact component={Signup}/> 
            <Route path='/form' exact component={Form}/> 
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
