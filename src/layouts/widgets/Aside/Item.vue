<template functional>
  <a-sub-menu :key="props.parentPath">
    <span slot="title">
      {{ props.menuInfo.meta.title }}
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item
        v-if="!item.children"
        :key="props.join(props.parentPath, item.path)"
      >
        <ALink :to="props.join(props.parentPath, item.path)">
          <span>{{ item.meta.title }}</span>
        </ALink>
      </a-menu-item>
      <Item
        v-else
        :key="props.join(props.parentPath, item.path)"
        :menu-info="item"
        :join="props.join"
        :parent-path="props.join(props.parentPath, item.path)"
      />
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
    join: Function,
    parentPath: String
  }
};
</script>
