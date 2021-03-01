<template>
  <section class="layout-section">
    <router-view />
  </section>
</template>
<script>
export default {
  name: "SECTION"
};
</script>
<style lang="less">
.layout-section {
  background: @system-background-color;
  margin-left: @system-menu-width;
  min-height: calc(100vh - @system-header-height);
}
</style>
