const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const BUILT_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client');

const config = {
  entry: [
    APP_DIR + '/index.jsx',
    APP_DIR + '/styles/style.scss'
  ],
  output: {
    path: BUILT_DIR,
    filename: 'bundle.js',
    publicPath: 'scripts/'
  },
  module: {
    loaders: [
      { test: /\.jsx?/, include: APP_DIR, loader: 'babel-loader'},
      { test: /\.scss/, include: APP_DIR, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use:'css-loader!sass-loader'})},
     // { test: /\.(pdf|jpg|png|gif|svg|ico)$/, loaders: ['file-loader?name=images/[name].[ext]']},
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [ new ExtractTextPlugin('style.css')]
};

module.exports = config;
