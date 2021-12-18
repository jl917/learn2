const wpp_html = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new wpp_html({
      title: 'title',
      filename: 'index.html',
      template: './src/app.html',
      
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    host: 'localhost',//'localhost',//host: '192.168.0.57',
    hot: true,
    port: 8888
  },

};