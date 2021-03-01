<template>
  <div class="layout">
    <Header />
    <Aside />
    <Section />
  </div>
</template>
<script>
import Header from "./widgets/Header";
import Aside from "./widgets/Aside";
import Section from "./widgets/Section";
export default {
  name: "LAYOUT",
  components: {
    Header,
    Aside,
    Section
  }
};
</script>
