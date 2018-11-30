// CommonJS syntax
// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;

// Module 2015 syntax
import 'babel-polyfill';
import express from 'express';

import Routes from './client/Routes';

// this library helps to figure out what components need to be rendered on the server side
// without actually rendering those components
import { matchRoutes} from 'react-router-config';

import renderer from './helpers/renderer';

// store is created way before we try to render anything
import createStore from './helpers/createStore';


const app = express();
app.use(express.static('public'));


app.get('*', (req, res) => {
    const store = createStore();

    // take incoming request url path and figure out what component is to be rendered
    // 'Routes' is an array of routes
    const promises = matchRoutes(Routes, req.path);
    promises.map( ( obj )=> {
        // call the function which is responsible for populating component with 
        // data needed for server side rendeing
        // this returns promises for all the async actions fired off
        return obj.route.loadData ? obj.route.loadData(store) : null;
    });

    Promise.all(promises).then( () => {
        console.log("all promises got resolved");

        const html = renderer(req, store);
        console.log(`HTML ->  ${html}`);
        res.send(html);  
    });
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});