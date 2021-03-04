<template>
  <div class="layout-tab-views">
    <div
      class="layout-tab-views--fixed"
      ref="tab-views"
      @wheel.prevent="handleScroll"
    >
      <TabViewsItem
        v-for="(item, i) in openedViews"
        :key="item.path"
        :item="item"
        :i="i"
        @close="close"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import TabViewsItem from "./TabViewsItem";
import { loginRedirectPath } from "@/router/config";
export default {
  name: "TabViews",
  components: {
    TabViewsItem
  },
  data() {
    return {
      action: 1
    };
  },
  computed: {
    ...mapState("tabView", ["openedViews"])
  },
  methods: {
    handleScroll(e) {
      this.$refs["tab-views"].scrollLeft -= e.wheelDelta;
    },
    close(item, i) {
      this.$store.dispatch("tabView/removePage", { item, i });
      if (this.openedViews.length > 0) {
        if (
          this.$route.path != this.openedViews[this.openedViews.length - 1].path
        ) {
          this.$router.push(this.openedViews[this.openedViews.length - 1]);
        }
      } else {
        if (this.$route.path !== loginRedirectPath)
          this.$router.push(loginRedirectPath);
      }
    }
  }
};
</script>
<style lang="less">
.layout-tab-views {
  height: @system-tabViews-height;
  margin-left: @system-menu-width;

  &--fixed {
    top: @system-header-height;
    background: @white;
    overflow: hidden;
    position: fixed;
    width: calc(100% - @system-menu-width);
    height: @system-tabViews-height;

    display: flex;
    .scrollbar();
    &:hover {
      overflow-x: auto;
    }
  }
}
</style>
