var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: 
         [
        'webpack-dev-server/client?http://localhost:8080', 

        './js/main.js'
    ],   
    output: {
        path: path.join(process.cwd(), '/build'), 
        filename: 'main.bundle.js', 
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'], 
                    compact: false
                }
            }
        ]
    },
    stats: {
        colors: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ], 
    devServer: {
        hot: true
        
    }, 

    devtool: 'none'
};
