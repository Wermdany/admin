<template>
  <a-modal v-bind="$props" v-on="$listeners">
    <slot />
    <template #footer>
      <div class="ant-modal-footer-btns" :class="{ info: useType == 'info' }">
        <a-button
          @click="handleCancel"
          class="cancel"
          v-if="useType == 'info'"
          type="link"
        >
          {{ cancelText || "取消" }}
        </a-button>
        <a-button @click="handleOk" type="link" :loading="confirmLoading">
          {{ okText || "提交" }}
        </a-button>
      </div>
    </template>
  </a-modal>
</template>
<script>
import { Modal, Button } from "ant-design-vue";
console.log(Modal);
export default {
  name: "SelfModal",
  model: {
    ...Modal.model
  },
  components: {
    [Modal.name]: Modal,
    [Button.name]: Button
  },
  props: {
    ...Modal.props,
    useType: {
      type: String,
      default: "confirm",
      validator: val => ["confirm", "info"].includes(val)
    }
  },
  methods: {
    ...Modal.methods
  }
};
</script>
<style lang="less">
// a-mode component
.ant-modal {
  &-header {
    text-align: center;
    padding: 16px 56px !important;
    border: none !important;
  }
  &-footer {
    &-btns {
      text-align: center;
      &.info {
        display: flex;
        justify-content: space-around;
      }
      .cancel {
        color: @text-color-secondary;
        &:active {
          color: @text-color;
        }
      }
    }
  }
}
</style>
