const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },

    module: {
        rules: [
            { test: /\.scss/, use: 'scss-loader' }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version)
        })
    ]
};
