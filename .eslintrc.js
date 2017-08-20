module.exports = {
  parser: 'babel-eslint',

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],

  plugins: [
    'react',
    'prettier',
    'import',
    'jest'
  ],

  env: {
    es6: true,
    browser: true,
    node: true
  },

  globals: {
    require: false,
    module: false,
    graphql: false
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
  },

  overrides: [
    {
      files: ['**/{__tests__,__mocks__}/**/*.js'],
      globals: {
        global: false,
        shallow: false,
        mount: false
      },
      env: {
        'jest/globals': true
      }
    }
  ]
};
