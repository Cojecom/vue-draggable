const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const config = {
  output: {
    path: path.resolve(`${__dirname}/dist`)
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false,
      },
    })
  ],
};

module.exports = [
  merge(config, {
    entry: path.resolve(`${__dirname}/src/plugin.js`),
    output: {
      filename: 'vue-draggable.min.js',
      libraryTarget: 'window',
      library: 'VueDraggable',
    }
  }),
  merge(config, {
    entry: path.resolve(`${__dirname}/src/Draggable.vue`),
    output: {
      filename: 'vue-draggable.js',
      libraryTarget: 'umd',
      library: 'vue-draggable',
      umdNamedDefine: true,
    }
  })
];