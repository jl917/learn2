const path = require('path');
const webpack = require('webpack');
const wpp_html = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', 'jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        loader: "tslint-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  plugins: [
    new wpp_html({
      title: 'typescript react',
      filename: 'index.html',
      template: './src/app.html',
    }),
  ],

  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all'
    }
  }
}