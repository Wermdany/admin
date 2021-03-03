<template functional>
  <a-sub-menu :key="props.menuInfo.path">
    <span slot="title">
      {{ props.menuInfo.title }}
    </span>
    <template v-for="item in props.menuInfo.children">
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
  </a-sub-menu>
</template>
<script>
import { Menu } from "ant-design-vue";
export default {
  functional: true,
  name: "Item",
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      default: () => ({})
    },
    path: String
  }
};
</script>
