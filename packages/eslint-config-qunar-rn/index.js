const rules = require('./rules');

module.exports = {
  extends: [
    'eslint-config-qunar-react',
    'plugin:eslint-plugin-event-listener/recommended'
  ],
  plugins: [
    'event-listener'
  ],
  rules
};
