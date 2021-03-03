<template>
  <div class="layout-tab-views">
    <div
      class="layout-tab-views--fixed"
      ref="tab-views"
      @wheel.prevent="handleScroll"
    >
      <TabViewsItem
        v-for="item in 50"
        :key="item"
        :item="{ a: item }"
        @cat="cat"
        :class="{ action: action == item }"
      />
    </div>
  </div>
</template>
<script>
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
  methods: {
    handleScroll(e) {
      this.$refs["tab-views"].scrollLeft -= e.wheelDelta;
      // console.log(e.wheelDelta);
    },
    cat(e) {
      console.log(e);
      this.action = e.a;
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
    display: flex;
    .scrollbar();
    &:hover {
      overflow-x: auto;
    }
  }
}
</style>
