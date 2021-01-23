<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnclick">按钮</button>
    <p>{{name}}</p>
    <h2>{{message}}</h2>
    <cpn></cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn.vue"
export default {
  name: "App",
  components:{
    Cpn
  },
  data(){
    return{
      message:"Hello WebPack",
      name:"Echo"
    }
  },
  methods:{
    btnclick(){
      console.log("cao");
    }
  }
}
</script>

<style scoped>
  .title{
    color: green;
  }
</style>