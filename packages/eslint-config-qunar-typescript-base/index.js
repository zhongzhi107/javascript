module.exports = {
  extends: ['eslint-config-qunar-base'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.mjs', '.jsx', '.ts', '.tsx', '.json'],
        paths: ['src']
      }
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx']
  },
  rules: {
    // 使用 ts 类型时会有问题，先禁用
    'no-unused-vars': 'off',

    // 以下 ts 中类型声明会报错
    // export type CqpMap = {
    //   h_home_rn?: Maybe<Scalars['Int']> // h_home_rn 为后端返回的字段
    // }
    camelcase: 'warn',

    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }]
  }
};
