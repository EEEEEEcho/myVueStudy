<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  /* 水平分布 */
  display: flex;
  /* 背景颜色 */
  background-color: #f6f6f6;
  /* 放到下面 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* x偏移 y偏移 */
  box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
}

</style>
