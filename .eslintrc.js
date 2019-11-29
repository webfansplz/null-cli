module.exports = {
  extends: ['airbnb-base'],
  globals: {
    name: 'off',
  },
  rules: {
    semi: 0,
    indent: 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'global-require': 0,
    'consistent-return': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'prefer-promise-reject-errors': 0,
    'no-restricted-syntax': 0,
    'no-multi-spaces': 0,
    'arrow-parens': [2, 'as-needed'],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
      },
    ],
  },
};
