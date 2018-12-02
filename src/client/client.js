// startup point for the client side application

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers';

import Routes from './Routes'; // this is Routes array
// this library helps to figure out what components need to be rendered on the server side
// without actually rendering those components
import { renderRoutes} from 'react-router-config';

/* window.INITIAL_STATE is a global variable which I had initialized with server side store data
so that client side store data is the same as server side
*/
const store = createStore(
    reducers, 
    window.INITIAL_STATE, 
    applyMiddleware(thunk)
);

// the root element here is the same as on the server side rendering
// BrowserRouter is for the client side only - it can look at the browser url to get the path
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>    
    </Provider>,
    document.querySelector('#root')
);