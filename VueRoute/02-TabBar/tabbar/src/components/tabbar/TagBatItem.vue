<template>
  <div class="tab-bar-item" @click="itemClick">
<!--    正常状态下的图片插槽,插槽包装一层,在上一层设置属性,否则在插槽内部设置属性,插槽在被替换掉时,会将其中设置的属性一并替换-->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
<!--    活跃状态下的图片插槽-->
    <div v-else><slot name="item-icon-active"></slot></div>
<!--    文字插槽,由于该插槽活跃时需要变换文字的颜色,所以,要绑定一个类,但是绑定的类在slot上时会被替换掉,因此要在外面包一层-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TagBatItem",
  props:{
    //点击时触发的路径通过传递动态获得要路由的路径
    path:String,
    //点击时动态决定活跃状态的文字颜色
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      // isNotActive: true
    }
  },
  computed:{
    isActive(){
      //判断当前路由中的path 是否包含当前组件中的path,从而判断活跃状态
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color : this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      console.log("Item Click")
      this.$router.replace(this.path).catch(err => {})
    }
  }
}
</script>

<style scoped>

/* 每一个item进行均等分 */
.tab-bar-item {
  /* 水平分布 */
  flex: 1;
  /* 内容居中 */
  text-align: center;
  /* 每一项的高度 */
  height: 49px;
  /* 调整文字大小 */
  font-size: 14px;
}
/* 设置class为.tab-bar-item 下的img标签的大小 其实就是设置图片的大小 */
.tab-bar-item img{
  width: 24px;
  height: 24px;
  /*设置图片到顶层的边距*/
  margin-top: 3px;
  /* 设置文字到图片之间的边距 */
  vertical-align: middle;
}

</style>
