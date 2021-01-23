//这个webpack的配置文件
//使用commons.js对webpack配置，实现一键打包
//动态获取绝对路径
//1.首先执行在当前目录(G:\HBuilderProjects\myVueStudy\WebPackLearn\01-webpackHowToUse\02-webpackHowToConfig>)
// 执行 npm init 用来初始化node环境
//2.配置路径 package name: (02-webpackhowtoconfig) meetwebpack
//3.配置入口 entry point: (webpack.config.js) index.js
//4.之后一路回车
//5.如果有node.js依赖的包，则使用npm install
//6.然后这个path模块就可以导入成功
const path = require('path')
// vue文件导出插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//版权导出插件
const webpack = require('webpack')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //这个参数的出现是因为，当图片经过file-loader打包后会打包到dist文件加下，但是css渲染的路径
        //是当前html的路径。因此会找不到图片文件的位置，因此需要在这里定义一个publicPath来使其能够找到
        //文件的位置,以后涉及到url的路径，前面都会拼接dist/
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                //这个test是匹配所有的css文件，然后根据下面的use进行应用
                test: /\.css$/i,
                //cssloader只负责将css文件进行加载(就是在某个js文件中进行import)，
                //并不负责解析和引入html中
                //如果想进行渲染的话，需要使用style-loader
                //style-loader负责将css添加到样式中，使其生效
                //这些loader使用是有顺序的，而且这个加载的过程是从右向左的。。
                use: ["style-loader", "css-loader"],
            },
            //lessloader处理所有的less文件
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                    }
                ]
            },
            // urlloader,用来处理图片信息的加载
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //注意:如果图片大小超过了这个限制，会报错，原因是图片过大，没有fileloader可以加载
                            //因此需要配置一个fileloader npm install file-loader@3.0.1 --save-dev
                            //当加载的图片小于这个limit时，会将图片编译成一个base64格式的字符串
                            limit: 8192,
                            //配置图片的命名规则
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    },
                ],
            },
            //babel-loader，用来将ES6转换为ES5
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use:['vue-loader']
            }
        ],
    },
    plugins: [

        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        // 版权插件
        new webpack.BannerPlugin("最终版权归Echo所有"),
    ],
    //要使用vue的一个配置
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}

// 安装一个本地的webpack 在当前目录执行 npm install webpack@3.6.0 --save-dev
// 我感觉这个本地的webpack其实就是相当于一个python中的虚拟环境
// 安装完本地的webpack之后，因为package.json中有一个"build": "webpack"那么
// 使用的这个webpack是本地的还是全局的呢？
// 如果配置了"build": "webpack",那么在使用npm run build时会优先使用本地的webpack