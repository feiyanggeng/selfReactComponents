const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../src/index.html')
})

module.exports = {
  entry: path.resolve(__dirname, "../src/entry.tsx"),
  plugins: [
    htmlWebpackPlugin
  ]
}