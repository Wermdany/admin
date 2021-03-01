<template>
  <div class="home">
    <Layout />
  </div>
</template>

<script>
import "ant-design-vue/es/_util/antInputDirective";
import Layout from "@/layouts";
export default {
  name: "Home",
  components: {
    Layout
  },
  data() {
    return {
      datePicker: ""
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    change(v) {
      console.log(v);
    }
  }
};
</script>
