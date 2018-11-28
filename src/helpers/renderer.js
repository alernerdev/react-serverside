import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/Routes';


/* BrowserRouter does not work on the server side. Static Router needs to be told what
component to render based on the request url */
export default (req) => {

    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
    );

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
