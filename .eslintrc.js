const { resolve } = require("path");

module.exports = {
  root: true,
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: ["prettier", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: resolve(__dirname, "tsconfig.json")
  },
  env: {
    node: true,
    es6: true,
    commonjs: true,
    jest: true
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".d.ts", ".tsx"]
      }
    }
  }
};
