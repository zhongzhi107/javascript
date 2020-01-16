const server = require('eslint-config-qunar-base/server');
const rules = require('./rules');
const globals = require('./globals');

module.exports = {
  extends: ['.'],
  rules: {
    ...server.rules,
    ...rules
  },
  globals
};
