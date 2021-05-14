const { override, fixBabelImports, addLessLoader } = require("customize-cra");
// 配置装饰器--需先安装npm add @babel/plugin-proposal-decorators
const { addDecoratorsLegacy } = require("customize-cra");

module.exports = override(
  // 按需加载antd
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "true",
  }),
  // 自定义主题色
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "red",
      "@border-color-base": "green",
      "@link-color": "orange",
    },
  }),
  // 配置装饰器
  addDecoratorsLegacy()
);
