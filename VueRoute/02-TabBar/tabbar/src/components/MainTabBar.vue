<template>
  <TabBar>
    <tag-bat-item path="/home" active-color="blue">
      <img src="../assets/img/tabbar/home.svg" slot="item-icon">
      <img src="../assets/img/tabbar/home_active.svg" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tag-bat-item>
    <tag-bat-item path="/category" active-color="blue">
      <img src="../assets/img/tabbar/category.svg" slot="item-icon">
      <img src="../assets/img/tabbar/category_active.svg" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tag-bat-item>
    <tag-bat-item path="/cart">
      <img src="../assets/img/tabbar/shopcart.svg" slot="item-icon">
      <img src="../assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tag-bat-item>
    <tag-bat-item path="profile">
      <img src="../assets/img/tabbar/profile.svg" slot="item-icon">
      <img src="../assets/img/tabbar/profile_active.svg" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tag-bat-item>
  </TabBar>
</template>

<script>
import TabBar from "../components/tabbar/TabBar";
import TagBatItem from "../components/tabbar/TagBatItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,TagBatItem
  }
}
</script>

<style scoped>

</style>
