const server = require('eslint-config-qunar-base/server');
const rules = require('./rules');

module.exports = {
  extends: ['.'],
  rules: {
    ...server.rules,
    ...rules
  }
};
