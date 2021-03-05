<template>
  <div class="params">
    <input type="text" name="" id="" />
    <img :src="src.data" alt="" />
    <ul>
      <li v-for="item in 100" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import { generateVerificationCode } from "@/utils";
export default {
  name: "params",
  data() {
    return {
      src: generateVerificationCode(140, 42)
    };
  }
};
</script>
<style lang="less" scoped></style>
