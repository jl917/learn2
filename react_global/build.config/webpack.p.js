const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const wpp_clean = require('clean-webpack-plugin');
const path = require('path');

module.exports = (env) => merge(common(env), {
    mode: 'production',
    plugins: [
        new wpp_clean(['dist'],{
            root: path.resolve(__dirname,'../')
        })
    ]
});