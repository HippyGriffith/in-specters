const webpack = require('webpack');
const path = require('path');

const config = {
  //entry: './src/app/page.tsx',
  //output: {
  //  path: path.resolve(__dirname, 'dist'),
  //  filename: 'bundle.js'
  //},
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};


module.exports = config;