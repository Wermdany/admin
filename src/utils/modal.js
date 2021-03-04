import { Modal } from "ant-design-vue";

const defaultOptions = {
  class: "self",
  icon: () => null,
  okButtonProps: {
    props: {
      type: "link"
    }
  }
};

export function alert(options) {
  return Modal.info(Object.assign(defaultOptions, options));
}

export function confirm(options) {
  return Modal.confirm(
    Object.assign(defaultOptions, { class: "self self-confirm" }, options)
  );
}
