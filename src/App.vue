<template>
  <ConfigProvider v-bind="bind" :locale="antLocale">
    <router-view />
  </ConfigProvider>
</template>
<script>
import { ConfigProvider } from "ant-design-vue";
import { mapState } from "vuex";
import { setSystemLocale } from "@/locales";
import { langKeys } from "@/locales/config";

export default {
  name: "APP",
  components: {
    ConfigProvider
  },
  data() {
    return {
      bind: {
        autoInsertSpaceInButton: false
      }
    };
  },
  computed: {
    ...mapState("locale", ["antLocale"])
  },
  mounted() {
    setSystemLocale(langKeys.zh_CN);
  }
};
</script>
