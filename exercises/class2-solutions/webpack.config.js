var webpack = require('webpack');
module.exports = {
  entry: [
    './js/app.js'
  ],
  output: {
    path: __dirname,
    filename: "my-app.js"
  }, 
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel',
        
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};