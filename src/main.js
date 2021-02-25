import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { isDev } from "@/utils/env";
import i18n from "@/packages/vue-i18n";

import "@/styles/index.less";

Vue.config.productionTip = false;
Vue.config.devtools = false;

window.__ENV__ = process.env;

if (isDev()) {
  console.log(window.__ENV__);
  Vue.config.devtools = true;
}

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
