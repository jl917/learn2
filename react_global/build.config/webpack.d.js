const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = (env) => merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        host:'192.168.1.57',//'localhost',//host: '192.168.0.57',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        
    ],
});