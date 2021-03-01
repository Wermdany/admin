<template>
  <div class="layout">
    <Header />
    <Menu />
  </div>
</template>
<script>
import Header from "./widgets/header";
import Menu from "./widgets/menu";
export default {
  name: "LAYOUT",
  components: {
    Header,
    Menu
  }
};
</script>
