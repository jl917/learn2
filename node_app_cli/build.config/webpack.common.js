const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = env => ({
    entry: ['babel-polyfill','./src/index.js'],
    target:'node',
    node: {
        __filename: true,
        __dirname: true,
    },
    externals: getExternals(),
    module: {
        rules: [
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            MODE: JSON.stringify(env.MODE)
        })
    ],
})

function getExternals() {
    return fs.readdirSync(path.resolve(__dirname, '../node_modules'))
        .filter(filename => !filename.includes('.bin'))
        .reduce((externals, filename) => {
            externals[filename] = `commonjs ${filename}`
            return externals
        }, {})
}