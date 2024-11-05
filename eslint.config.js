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
      'import': importPlugin
    }
  },
  {
    rules: {
      '@stylistic/js/semi': 'error',
      '@stylistic/js/quotes': [2, 'single', { 'avoidEscape': true }],
      '@stylistic/js/eol-last': 'error',
      '@stylistic/js/max-len': ['error', { code: 100 }],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/no-multi-spaces': 'error',
      '@stylistic/js/no-multiple-empty-lines': ['error', { 'max': 0 }],
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/keyword-spacing': ['error', { 'after': true }],
      'import/prefer-default-export': 'error',
      'prefer-const': 'error',
      'no-plusplus': 'error',
    }
  }
];
