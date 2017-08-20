module.exports = {
  parser: 'babel-eslint',

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'plugin:jsx-a11y/recommended'
  ],

  plugins: [
    'react',
    'prettier',
    'import',
    'jest',
    'jsx-a11y'
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
