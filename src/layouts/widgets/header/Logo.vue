<template>
  <div class="layout-logo">
    <a-icon :component="logo"></a-icon>
    <span class="layout-logo--text">LOGO</span>
  </div>
</template>
<script>
import logo from "@/assets/svg/logo.svg";
import { Icon } from "ant-design-vue";
export default {
  name: "LOGO",
  components: {
    [Icon.name]: Icon
  },
  data() {
    return {
      logo
    };
  }
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
  &--text {
    font-size: 34px;
    vertical-align: top;
    margin-left: 13px;
  }
}
</style>
