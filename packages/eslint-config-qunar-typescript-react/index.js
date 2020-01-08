const rules = require('eslint-config-qunar-react/rules');

module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-qunar-typescript-base'],
  plugins: ['react'],
  env: {
    es6: true,
    browser: true
  },
  rules
};
