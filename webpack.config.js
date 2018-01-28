const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/main.js'),       //入口
    },
    output: {
        filename: 'bundle.js',               //输出的文件名
        path: path.resolve(__dirname, 'build') //输出文件所在的目录
    },
    devServer: { // 检测代码变化并自动重新编译并自动刷新浏览器
        contentBase: path.resolve(__dirname, 'build') // 设置静态资源的根目录
    },
    devtool:'source-map',
    module: { // 如何处理项目中不同类型的模块
        rules: [ // 用于规定在不同模块被创建时如何处理模块的规则数组
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader"
                    },{
                        loader:"sass-loader",
                        options: {
                            outputStyle: "compressed" //生成压缩后的文件
                        }
                    }]
                })
            },
            {
                test: /\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader"
                    },{
                        loader:"less-loader",
                        options:{
                            compress:true   //生成压缩后的文件
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/index.css') //css scss less文件打包生成单个的css文件
    ]
}