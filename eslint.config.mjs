import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    plugins: {
      js
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always']
    }
  },
  prettier
])
