module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    _: true,
    lodash: true,
    React: true,
    ReactDOM: true,
  },
  plugins: ["@typescript-eslint", "react", "import", "react-hooks"],
  // 继承的规则
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 自定义规则列表
  rules: {
    // 强制在每个语句后面使用分号
    semi: [1, "always"],
  },
};
