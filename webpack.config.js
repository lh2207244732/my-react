const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExcractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        'index': './src/index.js'
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //处理CSS的loader
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    "css-loader"
                ]
            },
            // 处理其他文件的loader
            {
                exclude: /\.(css|js|html|less)/,
                loader: 'file-loader'
            },
            //babel处理ES6
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            //处理图片的loader
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2 * 1024
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //处理html
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true
        }),
        //处理css
        new MiniCssExcractPlugin({
            filename: 'resource/[name].[chunkhash].css'
        }),
        //清除旧代码
        new CleanWebpackPlugin()
    ],
    mode: 'development',
    //自动化配置
    devServer: {
        contentBase: './dist',
        port: 8080,
        open: true
    }
}