const path = require('path');
const webpack = require('webpack');
const wpp_html = require('html-webpack-plugin');
const wpp_css = require("mini-css-extract-plugin")
const wpp_flow = require('flow-webpack-plugin')


module.exports = {
  entry: './src/index.js',
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
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    host: 'localhost',//'localhost',//host: '192.168.0.57',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new wpp_css({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new wpp_html({
      title: 'TodoApp',
      filename: 'index.html',
      template: './src/app.html',
    }),
    new wpp_flow(),
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all'
    }
  }
};    