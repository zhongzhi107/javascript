module.exports = {
  extends: ['eslint-config-qunar-base'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      // 允许使用旧的装饰器语法
      // https://github.com/babel/babel-eslint/issues/662
      legacyDecorators: true
    }
  }
};
