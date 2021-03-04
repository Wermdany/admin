<template>
  <section class="layout-section">
    <keep-alive :include="cached">
      <router-view :key="$route.fullPath"> </router-view>
    </keep-alive>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Section",
  computed: {
    ...mapState("tabView", ["cached"])
  }
};
</script>
<style lang="less">
.layout-section {
  padding: 20px;
  background: @system-background-color;
  margin-left: @system-menu-width;
  min-height: calc(100vh - @system-header-height - @system-tabViews-height);
}
</style>
