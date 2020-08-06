const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ip = require("ip")

const resolve = require('path').resolve

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app',
    },
    output: {
        filename: 'js/bundle.js',
        path: resolve('dist'),
        publicPath: '/',
    },
    devServer: {
        host: ip.address(),
        port: 3200,
        open: true,
        historyApiFallback: true,
        stats: 'errors-only',
        contentBase: resolve('dist'),
    },
    module: { 
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnWarning: false,
                            failOnError: false,
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@root': resolve(),
            '@components': resolve('src/components'),
            '@hooks': resolve('src/hooks')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        })
    ],
    stats: 'errors-warnings',
};