module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/*', 'screenshots/*', 'yarn*', 'readme.md', 'package.json'],
  rules: {
    'linebreak-style': 0,
    'import/extensions': ['error', 'always', {
      js: 'always',
    }],
  },
};
