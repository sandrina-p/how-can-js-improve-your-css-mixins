/* global process, __dirname, module */
const postcssConfig = './config/postcss.config.js';
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const path = require('path');
const webpack = require('webpack');
const projectDir = path.resolve(`${__dirname}/..`);

const isDev = process.env.NODE_ENV !== 'production';

console.log('NODE_ENV:', process.env.NODE_ENV);

const config = {
    context: projectDir + '/src',
    entry: {
        'index': './index.js',
    },
    output: {
        filename: isDev ? '[name].js' : '[name].[chunkhash].js',
        path: path.resolve(projectDir, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                'exclude': /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: isDev,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: { path: postcssConfig }
                            }
                        },
                    ],
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 3000
    },
    plugins: [
        new ExtractTextPlugin('[name].[contenthash:base64:5].css'),
        new CleanWebpackPlugin(['build/*.css'], {
            root: projectDir
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            template: './index.html',
        }),
        new LodashModuleReplacementPlugin,
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false,
                drop_console: !isDev,
                drop_debugger: !isDev,
                screw_ie8: true,
            },
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:3000/',
            ghostMode: {
                clicks: false,
                forms: false,
                scroll: false
            },
            tunnel: false,
            open: false,
        }, {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false
        })
    ]
};

module.exports = config;
