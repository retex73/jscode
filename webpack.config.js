var path = require('path');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin'); 

module.exports = {
    entry: {
        app: './js/main.js',
    }, 
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
        new LiveReloadPlugin({
            protocol: 'http', 
            port: 35729, 
            hostname: 'localhost'
        })
    ], 
    devtool: 'source-map'
};