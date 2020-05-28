const rules = require('eslint-config-qunar-rn/rules');

module.exports = {
  extends: [
    'eslint-config-qunar-typescript-react',
    'plugin:eslint-plugin-event-listener/recommended'
  ],
  plugins: [
    'event-listener'
  ],
  rules
};
