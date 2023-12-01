module.exports = {
  env: {
    browser: true, // 表明代码运行在浏览器环境
    es2021: true, // 使用 ES2021 语法
    node: true, // 表明代码也可能运行在 Node.js 环境
  },
  extends: [
    "eslint:recommended", // 使用 ESLint 推荐的规则
    "plugin:svelte/recommended", // 使用 eslint-plugin-svelte 推荐的规则
  ],
  parserOptions: {
    ecmaVersion: 12, // 使用 ECMAScript 2021
    sourceType: "module", // 代码使用 ES 模块
  },
  plugins: [
    "svelte", // 使用 eslint-plugin-svelte 插件
  ],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte/svelte",
    },
  ],
};
