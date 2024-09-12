// @ts-check
import eslint from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  react.configs.flat.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.name,
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
    plugins: {
      react,
      'react-hooks': reactHooksPlugin
    },
    settings: {
      react: {
        version: 'detect',
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
      'react/prop-types': 'off',
      'react/no-is-mounted': 'off',
      'react/no-unknown-property': [
        'error',
        { ignore: ['css', 'focusable'] }
      ],
      ...reactHooksPlugin.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'off',
      'react-hooks/exhaustive-deps': [
        'warn',
        { 'additionalHooks': '(useRecoilCallback|useRecoilTransaction_UNSTABLE)' }
      ]
    }
  }
);
