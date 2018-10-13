import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import * as reducers from './store/allReducers';

import registerServiceWorker from './registerServiceWorker';


console.log(reducers);
const rootReducer = combineReducers(reducers)
console.log(rootReducer);
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(

    <Provider store={store} >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

    ,document.getElementById('root')
     );
registerServiceWorker();
