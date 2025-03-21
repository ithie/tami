import typescriptEslint from 'typescript-eslint'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import eslint from '@eslint/js'
import prettier from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

export default typescriptEslint.config(
  { ignores: ['*.d.ts', 'dist/'] },
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...vue.configs['flat/recommended'],
      prettier
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser
      }
    },
    rules: {
      ...vue.configs['vue3-essential'].rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...prettier.rules
    }
  },
  prettier
)
