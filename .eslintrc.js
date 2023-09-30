module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
        },
        groups: ['external', 'builtin', 'internal', 'index', 'parent', 'sibling', 'object', 'type'],
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
        commonjs: true,
      },
    ],
    'import/newline-after-import': 'error',
  },
};
