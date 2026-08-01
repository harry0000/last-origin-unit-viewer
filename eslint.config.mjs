// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import globals from 'globals';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      reactHooksPlugin.configs.flat.recommended,
      eslintReact.configs['recommended-typescript'],
      eslintReact.configs['disable-conflict-eslint-plugin-react-hooks']
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        jsxPragma: 'jsx',
        sourceType: 'module',
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2022
      },
    },
    rules: {
      'indent': [
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'no-console': [
        'error',
        { 'allow': ['error'] }
      ],
      'semi': [
        'error',
        'always'
      ],
      '@eslint-react/rules-of-hooks': 'off',
      '@eslint-react/no-unnecessary-use-prefix': 'off',
      '@eslint-react/exhaustive-deps': [
        'warn',
        { 'additionalHooks': '(useRecoilCallback|useRecoilTransaction_UNSTABLE)' }
      ]
    }
  }
);
