import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from '../client/Routes'; // this is Routes array
// this library helps to figure out what components need to be rendered on the server side
// without actually rendering those components
import { renderRoutes} from 'react-router-config';


/* BrowserRouter does not work on the server side. Static Router needs to be told what
component to render based on the request url

And the trick here is that we figure out what components need to be rendered WITHOUT rendering them
*/
export default (req, store) => {

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    console.log(`rendered content is ${content}`);
    
    /* this data is rendered and returned instantly -- its not waiting for any remote async calls */
    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}
