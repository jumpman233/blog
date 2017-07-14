var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./entry/main.js"),
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "bundle.js"
    },
    resolve:{
        extensions: ['.js', '.vue'],
        alias:{
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, 
                loader: 'vue-loader'   
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                exclude: /node_modules/
            }
        ]
    },
    devServer:{
        publicPath: '/public/',
        port: 4000,
        inline: true,
        hot: true
    }
}