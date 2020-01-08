const rules = require('./rules');

module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-qunar-base'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      // 允许使用旧的装饰器语法
      // https://github.com/babel/babel-eslint/issues/662
      legacyDecorators: true
    }
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: ['react'],
  rules
};
