var webpack = require('webpack');
module.exports = {
  entry: "./client/index.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    },
    {
      //tell webpack to use jsx-loader for all *.jsx files
      test: /\.jsx$/,
      loader: 'jsx-loader?insertPragma=React.DOM&harmony'
    }
  ]
},
plugins: [
  //This injects the following modules into the
  //global namespace
  new webpack.ProvidePlugin({
    $: "jquery",
    d3: "d3",
    _: "underscore",
    react: 'react'
  })
]
};
