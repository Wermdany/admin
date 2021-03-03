<template>
  <section class="layout-section">
    <router-view />
  </section>
</template>
<script>
export default {
  name: "Section"
};
</script>
<style lang="less">
.layout-section {
  padding: 30px;
  background: @system-background-color;
  margin-left: @system-menu-width;
  min-height: calc(100vh - @system-header-height - @system-tabViews-height);
}
</style>
