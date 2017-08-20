module.exports = {
  parser: 'babel-eslint',

  extends: [
    'prettier',
    'prettier/react'
  ],
  plugins: [
    'react',
    'prettier',
    'import'
  ],

  rules: {
    'prettier/prettier': ['error', { singleQuote: true }]
  },

  overrides: [
    {
      files: ['src/{__tests__,__mocks__}/**/*.js'],
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
