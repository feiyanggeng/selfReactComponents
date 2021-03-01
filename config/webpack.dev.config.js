const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../src/index.html')
});
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 const styleLoader =
   process.env.NODE_ENV === "development"
     ? require.resolve("style-loader")
     : MiniCssExtractPlugin.loader;


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
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(md|mdx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "@mdx-js/loader"],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: styleLoader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:7].css",
      chunkFilename: "static/css/[name].[contenthash:7].css",
    }),
    htmlWebpackPlugin,
    providePlugin,
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      src: path.resolve("src"),
      utils: path.resolve("src/utils"),
      components: path.resolve("src/components"),
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: "8088",
  },
};