<template>
  <div class="header-content">
    <div class="header-content--text">取引先管理プラットフォーム</div>
    <div class="header-content--menu">
      <div class="menu-user">
        <a-avatar :size="44" :src="avatar">avatar</a-avatar>
        <span class="username">Aguent Id</span>
      </div>
      <div class="back">
        <a-icon type="poweroff" />
      </div>
    </div>
  </div>
</template>
<script>
import { Avatar, Icon } from "ant-design-vue";
export default {
  name: "HEADER_CONTENT",
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
  font-size: 20px;
  color: @white;
  background: linear-gradient(270deg, #4cb8a8 0%, #31cca1 100%);
  display: flex;
  &--text {
    text-align: center;
    flex: 1;
    &::after,
    &::before {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      content: "";
      background: @white;
      display: inline-block;
      vertical-align: middle;
    }
    &::after {
      margin-left: 20px;
    }
    &::before {
      margin-right: 20px;
    }
  }

  &--menu {
    display: flex;
    .menu-user {
      cursor: pointer;
      transition: all 0.3s;
      font-size: 16px;
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
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }
  }
}
</style>
