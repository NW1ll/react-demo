module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 标准
    sourceType: 'module', // 使用 ES 模块
  },
  rules: {
    'no-unused-vars': 'warn',
    "object-curly-spacing": ["error", "always"],
    "react/jsx-curly-spacing": ["error", "always", { "spacing": { "objectLiterals": "never" } }],
    // 其他规则...
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
}
