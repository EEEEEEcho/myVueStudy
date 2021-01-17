var name = "小明";
var age = 18;
var flg = true;

function sum(num1,num2){
    return num1 + num2;
}
if(flg){
    console.log(sum(20,30));
}

// 1.导出方式一，将flg和sum()导出
export {
    flg,sum
}
// 2.导出方式二
export var num1 = 1000;
export var height = 1.88;

// 3.导出函数/类
export function func1(num1,num2){
    return num1 + num2;
}

export class Person{
    run(){
        console.log("HHH");
    }
}

// 4. export default,导出的这个address,可以在被导入的部分任意命名
// 例如：import addr from "./aaa.js";
// 这个addr在导出文件中并没有明确的命名，所以就拿到导出文件中的default
// 当然，一个导出文件中，就只能有一个export default
const address = "北京市";
// export default address;
export default function func2(){
    console.log("HHH");
}