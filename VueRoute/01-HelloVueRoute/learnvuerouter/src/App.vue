<template>
  <div id="app">
<!--    router-link用来定义路由，其中tag标签用来说明将组件渲染成什么标签-->
<!--    replace属性添加后，浏览器中的后退按钮就不会生效-->
<!--    <router-link to="/home" tag="button" replace >首页</router-link>-->
<!--    <router-link to="/about" replace >关于</router-link>-->
<!--   router-view就是一个占位符，用来提供组件的挂载位置 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关与</router-link>
<!--    <router-link to="user">我的妈啊</router-link>-->
<!--    动态路由3，绑定userId-->
<!--    <router-link :to="'/user/'+userId">用户</router-link>-->
<!--&lt;!&ndash;    想传递消息，需要传递一个对象,传递对象的第二种写法 &ndash;&gt;-->
<!--&lt;!&ndash;    http://localhost:8080/profile?name=echo&age=18&ndash;&gt;-->
<!--    -->
<!--    <router-link :to="{path:'/profile',query:{name:'echo',age:18}}">档案</router-link>-->

<!--    query和直接拼接的区别-->
<!--    query适合传递大量数据,而直接拼接适用于少量数据的传递-->

<!--    通过点击按钮的方式进行路由跳转并传递参数-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
<!--    普通的挂载方式-->
<!--    <div>-->
<!--      <router-view></router-view>-->
<!--    </div>-->
<!--使用keep-alive使得组件不会被销毁,exclude中所写的会排除在外-->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>


  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      //动态路由将userId拼接到/user下
      userId : 'lisi'
    }
  },
  methods:{
    userClick(){
      this.$router.push('/user/' + this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'coke',
          age:18
        }
      })
    }
  }
}
</script>

<style>
/* 点击后回触发 .router-link-active这个class，所以可以选中它然后使其变成红色
  该class可以手动通过添加 active-class属性来修改
*/
  .router-link-active{
    color: red;
  }
</style>
