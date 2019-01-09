const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [/node_modules/]
      },
      { test: /\.ejs$/, 
        use: ["ejs-loader"] 
      },
      {
        test: /\.(png|svg|img|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement"
    }),
    new HtmlWebpackPlugin({
      filename: "landing.ejs",
      template: "./src/landing.ejs"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      _: "underscore"
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  }
};