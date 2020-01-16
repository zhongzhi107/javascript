module.exports = {
  // 和 mapDispatchToProps 解构传参冲突
  'no-shadow': 'off',

  // rn 喜欢将 styles 写在页面最后
  'no-use-before-define': ['error', { variables: false }],

  // 事件绑定
  'jsx-a11y/no-static-element-interactions': 'off',

  // 需要使用变量解构方式对变量进行赋值
  'react/destructuring-assignment': 'off',

  // 平台区分文件名
  'react-native/split-platform-components': 'off',

  'jsx-a11y/click-events-have-key-events': 'off',

  // View 扩展 PanResponder
  'jsx-a11y/no-noninteractive-element-interactions': 'off',
  'react/prop-types': 'off',
  'react-native/no-color-literals': 'off',
  'react-native/no-inline-styles': 'off',
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

  // pure component
  'react/prefer-stateless-function': 'warn'
};
