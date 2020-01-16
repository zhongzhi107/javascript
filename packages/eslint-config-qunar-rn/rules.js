module.exports = {
  // 和 mapDispatchToProps 解构传参冲突
  'no-shadow': 'off',

  // rn 喜欢将 styles 写在页面最后
  'no-use-before-define': ['error', { variables: false }],
  'jsx-a11y/no-static-element-interactions': 0, // 事件绑定
  'react/destructuring-assignment': 0, //需要使用变量解构方式对变量进行赋值
  'react-native/split-platform-components': 0, // 平台区分文件名
  'jsx-a11y/click-events-have-key-events': 0,
  'jsx-a11y/no-noninteractive-element-interactions': 0, // View 扩展 PanResponder
  'react/prop-types': 0,
  'react-native/no-color-literals': 0,
  'react-native/no-inline-styles': 0,
  'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
  'react/prefer-stateless-function': 1  // pure component
};
