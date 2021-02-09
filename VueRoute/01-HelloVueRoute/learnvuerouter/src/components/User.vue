<template>
  <div>
    <h2>用户界面</h2>
    <p>用户的ID是{{userId}}</p>
    <p>{{$route.params.userId}}</p>
    <button @click="btnClick">按钮</button>
  </div>
</template>
<!--动态绑定路由1，创建一个component-->
<script>
export default {
  name: "User",
  computed:{
    userId(){
      //$route代表的是当前路由对象，何来当前之说？
      //当前就意味着，$route是现在活跃的route对象
      //为什么这里是userId呢？因为在动态路由上绑定的是userId
      //<router-link v-bind:to="'/user/' + userId">我的</router-link>
      return this.$route.params.userId
    }
  },
  methods:{
    btnClick(){
      console.log(this.$router)
      //this.$route 这个东西是当前活跃的路由
      console.log(this.$route)
      //所有的组件都集成自Vue类的原型
    }
  },
  // created() {
  //   //创建组件时回调
  //   console.log("created!")
  //   document.title = "用户"
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
