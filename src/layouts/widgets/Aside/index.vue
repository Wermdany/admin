<template>
  <aside class="layout-aside">
    <a-menu
      mode="inline"
      v-model="current"
      :inlineIndent="15"
      :defaultOpenKeys="defaultOpenKeys"
    >
      <template v-for="item in list">
        <Item
          v-if="item.children && item.children.length > 0"
          :key="item.path"
          :menu-info="item"
        />
        <a-menu-item v-else :key="item.path">
          <ALink :to="item.path">
            <span>{{ item.title }}</span>
          </ALink>
        </a-menu-item>
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
import { pathToOpenKeys, filterRoutesToMenu } from "./utils";
export default {
  name: "Aside",
  components: { Item, ALink },
  data() {
    return {
      defaultOpenKeys: pathToOpenKeys(this.$route.path)
    };
  },
  computed: {
    ...mapState("tabView", ["routes"]),
    list() {
      return filterRoutesToMenu(this.routes);
    },
    current: {
      get() {
        return [this.$route.path];
      },
      set() {
        // console.log(v);
      }
    }
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
