<template>
  <div class="goods">
    <input type="text" name="" id="" />
    <self-modal v-model="v" use-type="info" :title="111" :z-index="20000"
      >11</self-modal
    >
    <!-- <a-modal v-model="v" title="123131300">
      <p>135465465</p>
    </a-modal> -->
  </div>
</template>
<script>
import { confirm } from "@/utils";
import SelfModal from "@/components/Modal";
// import { Modal } from "ant-design-vue";
export default {
  name: "goods",
  components: {
    SelfModal
    // [Modal.name]: Modal
  },
  data() {
    return {
      v: true
    };
  },
  mounted() {
    confirm({
      title: "1231"
    });
  }
};
</script>
<style lang="less" scoped></style>
