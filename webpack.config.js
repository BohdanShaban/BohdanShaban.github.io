'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: '/src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/js/webpack__bundled'
  },

  watch: true,

  devtool: "source-map",

  module: {}
};
