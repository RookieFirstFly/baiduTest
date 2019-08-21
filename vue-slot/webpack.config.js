const pathLib = require('path');

module.exports = function(env, args){
    // "server": "webpack-dev-server  --env.production --test=abc"  //--test abc 与加等于 效果一样

    env = env || {};
    console.log("env",env);
    console.log("args",args);
    return {
        entry: './src/vm.js',
        module:{
            rules:[{
                test: /\.css$/,
                use: ["vue-style-loader","css-loader"]
            },{
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                use: ["file-loader"]
            },{
                test: /\.less$/i,
                use: ["vue-style-loader","css-loader","less-loader"]
            },{
                test: /\.vue$/i,
                use: ["vue-loader"]
            },{
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit: 50000
                    }
                }]
            }]
        },
        resolve:{
            alias: {
                vue: 'vue/dist/vue.esm'
            }
        },
        devServer:{
            host:"127.0.0.1",
            port: 8086  //配置代理服务器
        },
        ...env.development ? require('./config/webpack.dev.config.js') : require('./config/webpack.prod.config.js')
    }
}
