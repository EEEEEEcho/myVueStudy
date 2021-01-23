const baseConfig = require('./base.config')
const webPackMerge = require('webpack-merge')
module.exports = webPackMerge(baseConfig,{
    //配置开发时服务器
    devServer:{
        contentBase: './dist',
            inline:true
    }
});


//开发时使用base + dev