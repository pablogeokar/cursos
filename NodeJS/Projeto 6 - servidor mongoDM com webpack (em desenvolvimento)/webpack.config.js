const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    fs: 'empty'
  }
}


