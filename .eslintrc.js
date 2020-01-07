module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier', '@typescript-eslint', 'jest'],
  parser: '@typescript-eslint/parser',
  // それぞれの環境に固有なglobal variablesをESLintに認識させる。
  env: {
    es6: true,
    commonjs: true,
    node: true,
    'jest/globals': true,
  },
  // JSXなど、特定のparserを必要とする場合にここで指定
  // parserOptions
  ecmaFeatures: {
    jsx: true,
  },
  rules: {
    'prettier/prettier': 'error',
    // nested ternary sometimes looks good
    'no-nested-ternary': 'off',
    // Since some generated types for thrift have camel case.
    camelcase: 'off',
    // TODO: so for now I just close this rule, and improve it somehow in the future.
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts'] },
    ],
    'react/jsx-uses-vars': 'on',
  },
}
