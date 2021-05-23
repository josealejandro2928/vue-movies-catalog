module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'import/order': 'off',
    'prefer-template': 'off',
  },
};
