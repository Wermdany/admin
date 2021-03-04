import { Modal } from "ant-design-vue";
export function clear(router) {
  router.beforeEach((to, from, next) => {
    Modal.destroyAll();
    next();
  });
}
