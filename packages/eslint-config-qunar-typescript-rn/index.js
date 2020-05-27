const rules = require('eslint-config-qunar-rn/rules');

module.exports = {
  extends: [
    'eslint-config-qunar-typescript-react',
    'plugin:@qnpm/eslint-plugin-event-listener/recommended'
  ],
  rules
};
