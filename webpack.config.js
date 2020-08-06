const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ip = require('ip')

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
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        oneOf: [
          {
            test: /\.module\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { modules: true },
              },
              'sass-loader',
            ],
          },
          {
            use: [
              //Creates `style` nodes from JS strings
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'string-replace-loader',
                options: {
                  search: '/src/assets/fonts',
                  replace: 'fonts',
                  flags: 'g',
                },
              },
              //Translate CSS into CommonJS
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                },
              },
              'postcss-loader',
              'sass-loader',
            ],
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@root': resolve(),
      '@components': resolve('src/components'),
      '@hooks': resolve('src/hooks'),
      '@assets': resolve('src/assets'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  stats: 'errors-warnings',
}
