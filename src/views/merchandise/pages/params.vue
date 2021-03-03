<template>
  <div class="params">
    <ul>
      <li v-for="item in 100" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "PARAMS"
};
</script>
<style lang="less" scoped></style>
