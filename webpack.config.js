var webpack = require('webpack');
module.exports = {
    entry: "./client/entry.js",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }]
    },
    plugins: [
        //This injects the following modules into the 
        //global namespace
        new webpack.ProvidePlugin({
            $: "jquery",
            d3: "d3",
            _: "underscore"
        })
    ]
};