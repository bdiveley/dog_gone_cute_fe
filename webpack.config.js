const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: "./lib/index.js",
    test: "mocha-loader!./test/index.js"
  },
  mode: 'development',
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.css$/, loader: "style!css" },
        { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.css', '.scss']
    }
  };
