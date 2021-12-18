const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = env => merge(common(env), {
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, '../'),
    },
    mode: 'production'
});