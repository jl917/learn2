const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = env => merge(common(env), {
    output: {
        filename: 'server_dev.js',
        path: path.resolve(__dirname, '../'),
    },
    mode: 'development'
});