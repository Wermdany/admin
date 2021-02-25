<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a-button>哈哈</a-button>
    <a-input @change="change" type="textarea" v-model="datePicker"></a-input>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Button, Input } from "ant-design-vue";
import "ant-design-vue/es/_util/antInputDirective";
export default {
  name: "Home",
  components: {
    HelloWorld,
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
