<template>
  <div class="header-content">
    <div class="header-content--text">商户管理平台</div>
    <div class="header-content--menu">
      <div class="menu-user">
        <a-avatar :size="38" :src="avatar">avatar</a-avatar>
        <span class="username">Aguent ID</span>
      </div>
      <div class="back">
        <a-icon type="poweroff" :size="25" />
        <span class="text">退出</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Avatar, Icon } from "ant-design-vue";
export default {
  name: "HeaderContent",
  components: {
    [Avatar.name]: Avatar,
    [Icon.name]: Icon
  },
  data() {
    return {
      avatar: require("@/assets/images/avatar.png")
    };
  }
};
</script>
<style lang="less">
.header-content {
  margin-left: @system-menu-width;
  height: @system-header-height;
  line-height: @system-header-height;
  font-size: 18px;
  color: @white;
  display: flex;
  &--text {
    text-align: center;
    flex: 1;
    font-size: 24px;
  }

  &--menu {
    display: flex;
    .menu-user {
      cursor: pointer;
      transition: all 0.3s;
      font-size: 18px;
      padding: 0 10px;
      .username {
        margin-left: 16px;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }
    .back {
      margin-left: 20px;
      margin-right: 20px;
      padding: 0 10px;
      font-size: 25px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
      .text {
        font-size: 16px;
        margin-left: 9px;
        vertical-align: top;
      }
    }
  }
}
</style>
