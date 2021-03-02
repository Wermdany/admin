<template>
  <a-menu mode="inline">
    <a-menu-item>菜单项</a-menu-item>
    <a-sub-menu title="子菜单">
      <a-menu-item>
        <router-link to="">1111</router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script>
import { Menu } from "ant-design-vue";
import Vue from "vue";
Vue.use(Menu);
export default {
  name: "Item"
};
</script>
