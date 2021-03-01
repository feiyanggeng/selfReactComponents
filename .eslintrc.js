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
  rules: {
    // 强制在每个语句后面使用分号
    semi: [1, "always"],
    // 禁止使用 var
    "no-var": "error",
    // 优先使用 interface 而不是 type
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-explicit-any": "off",
  },
};
