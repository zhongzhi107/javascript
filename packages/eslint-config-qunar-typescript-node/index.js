module.exports = {
  extends: ['eslint-config-qunar-typescript-base'],
  env: {
    node: true,
    es2017: true,
    // 2020 包含 BigInit ，这个在 node 工程里可能会用到
    es2020: true
  }
};
