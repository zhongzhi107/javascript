module.exports = {
  'react/jsx-indent': 'off',
  'react/jsx-indent-props': 'off',
  'react/destructuring-assignment': 'off',
  'react/forbid-prop-types': 'off',
  'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/no-array-index-key': 'off',
  'react/prop-types': 'off',
  'react/no-danger': 'warn',
  'react/no-deprecated': 'warn',
  // 允许在ES6 class中使用静态属性声明propTypes和defaultProps
  'react/static-property-placement': 'off',
  // 禁止在 JSX 中使用 ref ，和 ref="nofollow" 冲突
  'react/no-string-refs': 'off',
  // 禁止在属性中直接使用 true 或 false
  'react/jsx-boolean-value': 'off',

  'jsx-a11y/anchor-is-valid': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/no-noninteractive-element-interactions': 'off',
  // 禁止在 JSX 中使用 tabIndex
  'jsx-a11y/tabindex-no-positive': 'off'
};
