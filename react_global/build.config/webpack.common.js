const path = require('path');
const webpack = require('webpack');

const wpp_html = require('html-webpack-plugin');
const wpp_css = require("mini-css-extract-plugin")
const wpp_copy = require('copy-webpack-plugin');


module.exports = (env) => {
    return {
        entry: ['babel-polyfill','./src/index.jsx'],
        resolve: {
            extensions: ['.js', '.jsx']
        },
        output: {
            filename: '[name].bundle.js?[hash]',
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
                    test: /\.(js|jsx)$/,
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
                title: 'Scanus System',
                filename: 'index.html',
                template: './src/app.html',
            }),
            new webpack.DefinePlugin({
                MODE: JSON.stringify(env.MODE)
            }),
            new wpp_copy([
                { from: path.resolve(__dirname, '../src/download.html'), to: path.resolve(__dirname, '../dist') },
              ]),
        ],
    
        optimization: {
            splitChunks: {
                name: 'common',
                chunks: 'all'
            }
        }
    }
}