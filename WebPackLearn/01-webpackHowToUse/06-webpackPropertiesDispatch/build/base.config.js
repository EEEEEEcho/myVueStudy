const path = require('path')
// vue文件导出插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//版权导出插件
const webpack = require('webpack')
//打包html模板使用的插件
const htmlWebPackPlugin = require('html-webpack-plugin')
//压缩js使用的插件
const uglifyjsWebPackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        //这里要更改，否则会在当前目录下创建一个dist
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        //这里使用插件之后，就不用配置这个目录了
        //publicPath: 'dist/'
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
        // 打包index.html的插件
        new htmlWebPackPlugin({
            // 配置dist下的index.html生成时的模板
            template:'index.html'
        }),
        //压缩js的插件
        //new uglifyjsWebPackPlugin()
    ],
    //要使用vue的一个配置
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    //配置开发时服务器
    // devServer:{
    //     contentBase: './dist',
    //     inline:true
    // }
}
