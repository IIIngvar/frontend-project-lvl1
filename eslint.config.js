import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import importPlugin from 'eslint-plugin-import';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      import: importPlugin,
    },
  },
  {
    rules: {
      '@stylistic/js/semi': 'error',
      '@stylistic/js/quotes': [2, 'single', { avoidEscape: true }],
      '@stylistic/js/eol-last': 'error',
      '@stylistic/js/max-len': ['error', { code: 100 }],
      '@stylistic/js/indent': ['error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
      }],
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/no-multi-spaces': 'error',
      '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/keyword-spacing': ['error', { after: true }],
      '@stylistic/js/quote-props': ['error', 'as-needed'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/js/space-before-blocks': 'error',
      '@stylistic/js/space-infix-ops': 'error',
      'import/prefer-default-export': 'error',
      'import/newline-after-import': 'error',
      'prefer-const': 'error',
      'no-plusplus': 'error',
      'no-confusing-arrow': 'error',
      'no-eval': 'error',
    },
  },
];
