
const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项
    entry: __dirname + "/app/index.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel' //在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                loader: 'style!css' //添加对样式表的处理
            },
            //组件样式,私有化
            {
                test: /\.less$/,
                include: path.resolve(__dirname, 'app/js'),
                loaders: [
                  'style',
                  'css?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]'
                ]
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, 'app/css'),
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=images/[hash:8].[ext]'
            },
            {
                test: /\.html$/i,
                loader: 'html-withimg-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    resolve: {
        rectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.json'],

        // 路径别名, 懒癌福音
        alias:{
                app:path.resolve(__dirname,'src/js'),
                // 以前你可能这样引用 import { Nav } from '../../components'
                // 现在你可以这样引用 import { Nav } from 'app/components'

                style:path.resolve(__dirname,'src/styles')
                // 以前你可能这样引用 import "../../../styles/mixins.scss"
                // 现在你可以这样引用 import "style/mixins.scss"

                // 注意：别名只能在.js文件中使用。
        }
    },

    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html', //生成html存放的路径，相当于path
            template: './index.html', //html模板路径
            inject: true, //允许插件修改那些内容，包括head与body
            hash: true //为静态资源生成hash值
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
        //把images的内容全部拷贝到编译的目录
        // new CopyWebpackPlugin([{
        //     from: __dirname + '/app/images',
        //     to: __dirname + '/public/images'
        // }])
    ]
}