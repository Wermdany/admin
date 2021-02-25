<template>
  <ConfigProvider v-bind="bind">
    <router-view />
  </ConfigProvider>
</template>
<script>
import { ConfigProvider } from "ant-design-vue";

import zh_CN from "ant-design-vue/es/locale/zh_CN";
import en_US from "ant-design-vue/es/locale/en_US";
import ko_KR from "ant-design-vue/es/locale/ko_KR";
import ja_JP from "ant-design-vue/es/locale/ja_JP";
import dayjs from "dayjs";

import zh_CN_L from "dayjs/locale/ja";
dayjs.locale(zh_CN_L);
export default {
  name: "APP",
  components: {
    ConfigProvider
  },
  data() {
    this.locales = {
      zh_CN,
      en_US,
      ko_KR,
      ja_JP
    };
    return {
      bind: {
        locale: this.locales.zh_CN,
        autoInsertSpaceInButton: false
      }
    };
  }
};
</script>
