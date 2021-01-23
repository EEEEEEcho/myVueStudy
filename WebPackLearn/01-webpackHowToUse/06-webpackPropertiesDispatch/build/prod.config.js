//压缩js使用的插件
const uglifyjsWebPackPlugin = require('uglifyjs-webpack-plugin')
const webPackMerge = require("webpack-merge")
//配置合并文件插件
const baseConfig = require('./base.config')
//使用配置文件合并插件进行基本配置和生产环境进行合并
module.exports = webPackMerge(baseConfig,{
    plugins: [
        //压缩js的插件
        new uglifyjsWebPackPlugin()
    ],
})

//生产时使用 base + prod