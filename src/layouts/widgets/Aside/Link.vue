<template>
  <component :is="null" v-bind="linkProps(to)">
    <slot />
  </component>
</template>
<script>
import { isExternal } from "@/utils/is";
export default {
  name: "Link",
  props: {
    to: {
      required: true,
      type: [String, Object]
    }
  },
  methods: {
    linkProps(to) {
      if (isExternal(to)) {
        return {
          is: "a",
          href: to,
          target: "_blank",
          rel: "noopener"
        };
      } else {
        return {
          is: "router-link",
          to
        };
      }
    }
  }
};
</script>
