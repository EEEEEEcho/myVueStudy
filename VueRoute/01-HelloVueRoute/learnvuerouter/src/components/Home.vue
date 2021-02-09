<template>
  <div>
    <h2>我是首页</h2>
    <!--    在此处嵌套子路由-->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <h3><router-view></router-view></h3>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      message:'你好啊'
    }
  },
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroyed");
  },
  //这两个函数，只有该组件保持了状态，使用了keep-alive时，才是有效的
  activated() {
    console.log("home activated");
    // this.$router.push(this.path)
  },
  deactivated() {
    console.log("home deactivated");
    // this.path = this.$route.path;
  },
  beforeRouteLeave(to,from,next){
    this.path = this.$route.path;
    next()
  }
  // created() {
  //   //创建组件时回调
  //   console.log("created!")
  //   document.title = "首页"
  // },
  // mounted() {
  //   //template挂载到dom上回调
  //   console.log("mounted!")
  // },
  // updated() {
  //   //界面发生刷新时回调
  //   console.log("update!")
  // }
}
</script>

<style scoped>

</style>
