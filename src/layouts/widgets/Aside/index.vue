<template>
  <aside class="layout-aside">
    <Item />
  </aside>
</template>
<script>
import Item from "./Item.vue";
import "./menu.less";
export default {
  components: {
    Item
  }
};
</script>
<style lang="less">
.layout-aside {
  width: @system-menu-width;
  height: calc(100vh - @system-header-height);
  float: left;
  position: fixed;
}
</style>
