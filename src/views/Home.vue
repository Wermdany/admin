<template>
  <div class="home">
    <a-button>{{ $t("a") }}</a-button>
    <a-input @change="change" type="textarea" v-model="datePicker"></a-input>
  </div>
</template>

<script>
import { Button, Input } from "ant-design-vue";
import "ant-design-vue/es/_util/antInputDirective";
export default {
  name: "Home",
  components: {
    [Button.name]: Button,
    [Input.name]: Input
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
