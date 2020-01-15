module.exports = {
  plugins: ['sonarjs'],
  rules: {
    // 禁用 debugger
    'no-debugger': 'error',

    // 禁用八进制字符串
    'no-octal': 'error',

    // 禁用逗号操作符
    'no-sequences': 'error',

    // 禁止函数参数重名
    'no-dupe-args': 'error',

    // 禁止重复的 key
    'no-dupe-keys': 'error',

    // 禁止出现不使用的变量
    'no-unused-vars': 'error',

    // 禁止使用多行字符串
    'no-multi-str': 'error',

    // 禁用 for (;condition;) { /*...*/ } 这种结构的循环
    'sonarjs/prefer-while': 'error',

    // 禁用 with
    'no-with': 'error',

    // 禁用 new Symbol
    'no-new-symbol': 'error'
  }
};
