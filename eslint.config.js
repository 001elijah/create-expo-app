const expoConfig = require('eslint-config-expo/flat')
const eslintConfigPrettier = require('eslint-config-prettier')
const eslintPluginPerfectionist = require('eslint-plugin-perfectionist')
const eslintPluginPrettier = require('eslint-plugin-prettier')

module.exports = [
  ...expoConfig,
  eslintPluginPerfectionist.configs['recommended-natural'],
  eslintConfigPrettier,
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      // From your provided config
      '@typescript-eslint/no-explicit-any': 'off',

      camelcase: 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              importNames: ['default', 'FC'],
              message: 'React default import is not needed with React 17+',
              name: 'react'
            }
          ]
        }
      ],
      'perfectionist/sort-imports': ['error', { newlinesBetween: 'never' }],
      // Custom Prettier rules
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          endOfLine: 'lf',
          printWidth: 120,
          semi: false,
          singleQuote: true,
          trailingComma: 'none'
        }
      ],
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: ['node_modules', 'dist/*']
  }
]
