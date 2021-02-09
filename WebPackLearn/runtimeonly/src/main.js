import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //render: h => h(App)
  //这个render函数相当于
  // render:function (createElement){
  //   return createElement(App)
  // }
  //使用render函数之后，会省去由template -> ast(抽象语法树) 的过程
  //而是直接生成虚拟DOM ast -> virtual DOM
  render:function (createElement){
    // 将这个h2渲染到index.html中
    return createElement('h2',{class:'box'},['Hello world'])
  }
})
