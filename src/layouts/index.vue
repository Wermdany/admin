<template>
  <div class="layout">
    <Header />
    <Aside />
    <TabViews />
    <Section />
  </div>
</template>
<script>
import Header from "./widgets/Header";
import Aside from "./widgets/Aside";
import Section from "./widgets/Section";
import TabViews from "./widgets/TabViews";
export default {
  name: "LAYOUT",
  components: {
    Header,
    Aside,
    Section,
    TabViews
  }
};
</script>
