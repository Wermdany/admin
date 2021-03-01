<template>
  <div class="home">
    1111111111
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      datePicker: "",
      drag: true,
      a: ""
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
<style lang="less" scoped>
.flip-list-move {
  transition: transform 0.5s;
}
</style>
