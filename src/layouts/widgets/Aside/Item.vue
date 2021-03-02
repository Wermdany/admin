<template>
  <a-menu mode="inline">
    <a-menu-item>菜单项</a-menu-item>
    <a-sub-menu title="子菜单">
      <a-menu-item>
        <LinkItem to="https://www.baidu.com">子菜单项</LinkItem>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script>
import { Menu } from "ant-design-vue";
import Vue from "vue";
import LinkItem from "@/layouts/widgets/Aside/Link";
Vue.use(Menu);
export default {
  components: { LinkItem },
  name: "Item"
};
</script>
