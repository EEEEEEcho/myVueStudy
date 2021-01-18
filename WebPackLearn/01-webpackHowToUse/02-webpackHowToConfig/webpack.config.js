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
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}

// 安装一个本地的webpack 在当前目录执行 npm install webpack@3.6.0 --save-dev
// 我感觉这个本地的webpack其实就是相当于一个python中的虚拟环境
// 安装完本地的webpack之后，因为package.json中有一个"build": "webpack"那么
// 使用的这个webpack是本地的还是全局的呢？
// 如果配置了"build": "webpack",那么在使用npm run build时会优先使用本地的webpack