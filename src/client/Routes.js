import React from 'react';
// import {Route} from 'react-router-dom';

// these imports are objects with properties
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

import App from './App';

/*
export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UsersList} />
        </div>
    );
}
*/

// could be using spread operator here (like ...HomePage), but spelling it out instead of readability
export default [
    {
        // App does not have a path, so it will always be displayed
        component: App.component,
        loadData: App.loadData,
        routes: [
            {
                path: '/',
                component: HomePage.component,
                exact: true
            },
            {
                path: '/users',
                component: UsersListPage.component,
                loadData: UsersListPage.loadData
            }        
        ]
    }
];

