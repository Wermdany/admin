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
  name: "Header",
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
    background: linear-gradient(270deg, #4cb8a8 0%, #31cca1 100%);
    top: 0;
    overflow: hidden;
    position: fixed;
    width: 100%;
  }
}
</style>
