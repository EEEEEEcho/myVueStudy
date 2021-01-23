<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnclick">按钮</button>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "Paa",
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