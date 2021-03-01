<template>
  <aside class="layout-aside">
    <Item />
  </aside>
</template>
<script>
import Item from "./Item.vue";
export default {
  components: {
    Item
  }
};
</script>
<style lang="less">
.layout-aside {
  width: @system-menu-width;
}
</style>
