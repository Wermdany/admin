<template>
  <div class="layout-logo">
    <img class="layout-logo-pic" src="@/assets/images/logo.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "Logo"
};
</script>
<style lang="less">
.layout-logo {
  font-size: 52px;
  line-height: @system-header-height;
  width: @system-menu-width;
  height: @system-header-height;
  text-align: center;
  float: left;
  &-pic {
    width: 140px;
    vertical-align: top;
    margin-top: (@system-header-height - 67px) / 2;
  }
}
</style>
