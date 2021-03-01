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
