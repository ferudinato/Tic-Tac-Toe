const webpack       = require('webpack');
const path          = require('path');

const HtmlWebpackPlugin             = require('html-webpack-plugin');
const MiniCssExtractPlugin          = require('mini-css-extract-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

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
            { test: /\.css$/, include: srcPath + '/styles', exclude: /(node_modules)/, use: [ MiniCssExtractPlugin.loader, 'css-loader' ] },
            { test: /\.html$/, include: srcPath, exclude: /(node_modules)/, use: 'html-loader' }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: srcPath + '/app.html',
            //minify: true,
            //inlineSource: '.(js|css)$'
        }),
        //new HtmlWebpackInlineSourcePlugin()
    ]
}
