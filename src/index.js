import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import * as reducers from './store/allReducers';

import {register} from './serviceWorker';


const rootReducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)) );



ReactDOM.render(

    <Provider store={store} >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

    ,document.getElementById('root')
     );
register();
