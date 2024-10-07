// vite 容易上手 webpack有难度 要配置
// commonjs node 模块化方案
// 启动一个server 5173
// 将index.html作为首页 src/main.js作为入口执行js
// 打包 bundle webpack 一切静态资源皆可打包
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development', // 开发环境打包
    entry: './src/main.js', // 入口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除 node_modules 加快进度
                use: {
                    loader: 'babel-loader', // 进行转义
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // 链式调用多个 loader
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader', // 处理 .vue 文件
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'), // 使用 static 代替 contentBase
        port: 8520, // 启动服务器的端口
        hot: true, // 热更新
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 指定模板文件
        }),
        new VueLoaderPlugin(), // 引入 VueLoaderPlugin 插件
    ]
};
