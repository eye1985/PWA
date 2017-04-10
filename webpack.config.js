const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry : './src/app.js',
    output:{
        filename:'app.min.js',
        path: path.resolve(__dirname,'dist'),
        publicPath:'dist'
    },

    module : {
        rules : [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    devServer:{
        host:'0.0.0.0',
        https: true,
        port:3000,
        compress:true,
        hot:true
    }
};
