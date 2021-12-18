const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

let config = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        use: [CssWebpackPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.styl$/,
        use: [
          CssWebpackPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:16]',
              },
            },
          },
          'postcss-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
    }),
    new CssWebpackPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'title',
      filename: 'index.html',
      template: './src/app.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      MODE: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
    },
  },
};

if (process.env.NODE_ENV === 'local') {
  config = Object.assign(config, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
      contentBase: './dist',
      host: 'localhost', // 'localhost',//host: '192.168.0.57',
      hot: true,
      port: 8888,
      historyApiFallback: true,
      compress: true,
    },
  });
}

module.exports = config;