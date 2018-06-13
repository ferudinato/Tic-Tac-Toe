const webpack       = require('webpack');
const path          = require('path');

const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

const buildPath     = path.resolve(__dirname, 'build');
const srcPath       = path.resolve(__dirname, 'src');


module.exports = {
    entry: srcPath + '/index.js',
    output: {
        filename: 'bundle.js',
        path: buildPath
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, include: srcPath, exclude: /(node_modules)/, use: 'babel-loader' },
            { test: /\.css$/, include: srcPath + '/styles', exclude: /(node_modules)/, use: [ MiniCssExtractPlugin.loader, 'css-loader' ] }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: '[id].css'
        })
    ]
}
