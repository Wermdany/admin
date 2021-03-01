<template>
  <div class="layout-header">
    <Logo />
    <HeaderContent />
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
  overflow: hidden;
}
</style>
