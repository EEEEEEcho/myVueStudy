const {add,mul} = require("./js/mathUtil.js")
console.log(add(20,30));
console.log(mul(20,30));
import {name,age,height} from "./js/info";
console.log(name,age,height);
//依赖css文件
require('./css/normal.css')
//依赖less文件
require("./css/special.less")
document.writeln('<h2>石家庄加油</h2>');
//使用vue进行开发
import Vue from "vue"
//导出定义的模板，命名为app
//import App from "./vue/Vueapp"
//导出定义的模板，命名为app,从Vue文件导入
import App from "./vue/App.vue";
//import App2 from "./vue/App2";
//import Paa from "./vue/Paa";
new Vue({
    el:"#app",
    //然后在Vue对象中进行引入
    template:`<App/>`,
    components:{
        App
    }
});