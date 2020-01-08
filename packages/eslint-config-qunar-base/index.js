module.exports = {
  extends: ['eslint-config-airbnb-base'],
  plugins: ['qunar'],
  // reportUnusedDisableDirectives: true,
  rules: {
    // 函数复杂度
    complexity: 'off',
    // 禁止使用 javascript:void(0)
    'no-script-url': 'off',
    //禁止使用按位运算符，关闭
    'no-bitwise': 'off',
    // 禁止使用不用的表达式，和 a?.() 冲突
    'no-unused-expressions': 'off',
    'class-methods-use-this': 'off',
    // 强制对象的最后一项不能有逗号
    'comma-dangle': ['error', 'never'],
    'no-alert': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    // 允许在 for 循环中使用自增/自减
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    // 不能在 import 语句中使用表达式，如 require(`../${name}`);
    'import/no-dynamic-require': 'off',

    // 强制 eslint-disable 后必须跟具体规则名称
    'qunar/no-abusive-eslint-disable': 'error',
    // 强制要求数组长度做比较运算
    'qunar/explicit-length-check': 'error'
  }
};
