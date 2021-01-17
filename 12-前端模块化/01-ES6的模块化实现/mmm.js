import { sum } from "./aaa";
//1.导入{}中定义的变量
import {flg,sum} from "./aaa.js";
if(flg){
    console.log("小明是天才");
}
console.log(sum(30,40));
// 2.导入 export直接导出的变量
import {num1,height} from "./aaa.js";
// 3.导入函数和类
import {func1,Person} from "./aaa.js";
// 4.导入default
import funct from "./aaa.js"
// 5.全部导入
import * as aaa from "./aaa.js"
// 拿aaa.js中的flg
console.log(aaa.flg);
