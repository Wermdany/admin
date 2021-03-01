<template>
  <div class="layout-header">
    <div class="layout-header--fixed">
      <Logo />
      <HeaderContent />
    </div>
  </div>
</template>
<script>
import Logo from "./Logo";
import HeaderContent from "./HeaderContent";
export default {
  name: "HEADER",
  components: {
    Logo,
    HeaderContent
  }
};
</script>
<style lang="less">
.layout-header {
  height: @system-header-height;
  &--fixed {
    top: 0;
    overflow: hidden;
    position: fixed;
    width: 100%;
  }
}
</style>
