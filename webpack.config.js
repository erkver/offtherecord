const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude : [
          /node_modules/
        ]
      },
      // {
      //   test: /\.html/,
      //   loader: 'raw-loader'
      // },
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
};