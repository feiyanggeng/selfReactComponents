const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../src/index.html')
});

const providePlugin = new webpack.ProvidePlugin({
  _: "lodash",
  lodash: 'lodash',
  React: "react",
  ReactDOM: "react-dom",
});

module.exports = {
  entry: path.resolve(__dirname, "../src/entry.tsx"),
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/[name].[hash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
    ],
  },
  plugins: [htmlWebpackPlugin, providePlugin],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};