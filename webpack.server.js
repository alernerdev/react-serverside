const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js');

const config = {
    // Inform webpack we are building for NodeJS rather than browser
    target: 'node',

    // root file of server application
    entry: './src/index.js',

    // tell webpack where to put output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    mode: 'development',

    // exclude those libraries which are available on the server side anyway -- no need
    // to include them in the server bundle.js
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);