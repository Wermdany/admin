<template>
  <div class="home">
    <ul>
      <li v-for="i in 100" :key="i">{{ i }}</li>
    </ul>
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
