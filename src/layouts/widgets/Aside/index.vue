<template>
  <aside class="layout-aside">
    <a-menu mode="inline" v-model="current" :defaultOpenKeys="defaultOpenKeys">
      <template v-for="item in routes">
        <a-menu-item v-if="!item.children" :key="item.path">
          <ALink :to="item.path">
            <span>{{ item.meta.title }}</span>
          </ALink>
        </a-menu-item>
        <Item
          v-else
          :key="join('/', item.path)"
          :menu-info="item"
          :join="join"
          :parent-path="item.path || '/'"
        />
      </template>
    </a-menu>
  </aside>
</template>
<script>
import { Menu } from "ant-design-vue";
import ALink from "./Link";
import Vue from "vue";
Vue.use(Menu);
import "./menu.less";
import Item from "./Item";
import { mapState } from "vuex";
import { join } from "@/utils";
import { pathToOpenKeys } from "./utils";
export default {
  name: "Aside",
  components: { Item, ALink },
  data() {
    return {
      current: [this.$route.path],
      defaultOpenKeys: pathToOpenKeys(this.$route.path)
    };
  },
  computed: {
    ...mapState("tabView", ["routes"])
  },
  methods: {
    join
  }
};
</script>
<style lang="less">
.layout-aside {
  width: @system-menu-width;
  height: calc(100vh - @system-header-height);
  float: left;
  position: fixed;
}
</style>
