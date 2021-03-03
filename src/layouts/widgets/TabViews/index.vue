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
      this.$store.dispatch("tabView/deleteOpenedViews", { item, i });
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
