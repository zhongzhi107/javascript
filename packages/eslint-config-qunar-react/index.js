const rules = require('./rules');

module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-qunar-base'],
  parserOptions: {
    ecmaFeatures: {
      // 允许使用旧的装饰器语法
      // https://github.com/babel/babel-eslint/issues/662
      legacyDecorators: true
    }
  },
  plugins: ['react'],
  rules
};
