const { isDev } = require("../env");

const plugins = require("./plugins");

const loader = require("./loader");
const { resolve } = require("../path");

module.exports = config => {
  if (isDev) {
    config.devtool("source-map");
  }
  plugins(config);
  loader(config);
  config.resolve.alias.set(
    "@ant-design/icons/lib/dist$",
    resolve("./src/icons/ant-icon.js")
  );
  // config.optimization.splitChunks({
  //   chunks: "all"
  // });
};
