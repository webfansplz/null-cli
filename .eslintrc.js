module.exports = {
  extends: ['plugin:prettier/recommended'],
  globals: {
    name: 'off',
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
