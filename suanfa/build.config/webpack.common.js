const path = require('path');
const webpack = require('webpack');

const wpp_html = require('html-webpack-plugin');
const wpp_css = require("mini-css-extract-plugin")
const wpp_copy = require('copy-webpack-plugin')
//const manifest = require('../manifest/vendor-manifest.json')

module.exports = {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(css|styl)$/,
                use: [
                    wpp_css.loader,
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    wpp_css.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: {
                                'primary-color': '#283593',
                                'link-color': '#283593',
                                'font-size-base': '13px'
                                
                            },
                            javascriptEnabled: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|svg)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }]
            }
        ]
    },

    plugins: [
        new wpp_css({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new wpp_html({
            title: 'react 16',
            filename: 'index.html',
            template: './src/app.html',
        }),


        /*new webpack.DllReferencePlugin({
            manifest
        }),*/


    ],

    optimization: {
        splitChunks: {
            name: 'common',
            chunks: 'all'
        }
    }
}