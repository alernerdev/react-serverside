const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const config = {
    // root file of server application
    entry: './src/client/client.js',

    // tell webpack where to put output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    mode: 'development'  
};

module.exports = merge(baseConfig, config);