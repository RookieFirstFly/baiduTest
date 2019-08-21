/**
*   开发环境
*/
const pathLib = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlPlugin = require("html-webpack-plugin");  //生成html模板的插件

module.exports = {
    mode: 'development',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins:[
        // new Webpack.HotModuleReplacementPlugin(),   //webpack4.0自带热更新
        new VueLoaderPlugin(),
        new htmlPlugin({ //关于生成的模板 动态生成的js会append到body中
            filename: "index.html",
            template:  pathLib.resolve(__dirname, "../index.html")    //模板路径
        })
    ]
}
