import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { isDev } from "@/utils/env";

import i18n from "@/packages/vue-i18n";

import "@/styles/index.less";

import { createGuard } from "@/router/guard";

createGuard(router);

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

import { getAllRouterConfig } from "@/router/generator";
import { filterRoutesToMenu } from "@/layouts/widgets/Aside/utils";
console.log(filterRoutesToMenu(getAllRouterConfig()));
