const path = require("path");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ["prettier"],
  plugins: ["prettier", "@typescript-eslint/eslint-plugin"],
};
