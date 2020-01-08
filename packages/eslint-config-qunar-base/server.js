module.exports = {
  extends: ['.'],
  rules: {
    // 关闭缩进检查
    indent: 'off',
    'import/extensions': 'off',
    // 忽略 node_modules 中的引用，因为服务器端检查不会安装依赖包
    // 在 webpack 可以设置 alias ，这也会影响地址的判断
    // 所以干脆关闭该项检查，反正在本地已经检查过了，问题不大
    'import/no-unresolved': 'off',
    'import/resolver': 'off'
  }
};
