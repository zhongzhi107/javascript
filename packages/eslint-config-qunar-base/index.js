const env = require('./env');

module.exports = {
  extends: ['eslint-config-airbnb-base'],
  parser: 'babel-eslint',
  plugins: ['qunar'],
  env,
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
    'max-classes-per-file': 'warn',
    'max-len': ['warn', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-alert': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    // 允许在 for 循环中使用自增/自减
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],

    // 单行最多解构 10 个变量，超过需要换行
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 11, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 11, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 11, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 11, multiline: true, consistent: true },
    }],

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
    'import/prefer-default-export': 'off',

    // 强制 eslint-disable 后必须跟具体规则名称
    'qunar/no-abusive-eslint-disable': 'error',
    // 强制要求数组长度做比较运算
    'qunar/explicit-length-check': 'error'
  }
};
