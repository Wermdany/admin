<template>
  <div class="tab-views-item" :class="{ action: isAction(item) }">
    <router-link :to="item" tag="span">
      <span class="text">{{ item.title }}</span>
      <a-icon type="close" @click.stop="$emit('close', item, i)" />
    </router-link>
  </div>
</template>
<script>
import { Icon } from "ant-design-vue";
export default {
  name: "TabViewsItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    i: Number
  },
  components: {
    [Icon.name]: Icon
  },
  methods: {
    to(item) {
      this.$router.push(item);
    },
    isAction(item) {
      return item.path == this.$route.path;
    }
  }
};
</script>
<style lang="less">
@system-tabViews-item-height: @system-tabViews-height - 10px;

.tab-views-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: @system-tabViews-item-height;
  margin-top: 10px;
  color: #333;
  font-size: 14px;
  padding: 0 18px;
  &.action {
    background-color: @system-background-color;
    border-radius: 10px 10px 0 0;

    .text {
      &::before {
        background: #f27710;
      }
    }
  }
  .text {
    margin-right: 35px;
    white-space: nowrap;
    &::before {
      content: "";
      width: 10px;
      height: 10px;
      display: inline-block;
      border-radius: 50%;
      margin-right: 9px;
      background: #cacdd2;
    }
  }
  .anticon.anticon-close {
    font-size: 10px;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
