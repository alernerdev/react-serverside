// startup point for the client side application


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

// the root element here is the same as on the server side rendering
// BrowserRouter is for the client side only - it can look at the browser url to get the path
ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.querySelector('#root')
);