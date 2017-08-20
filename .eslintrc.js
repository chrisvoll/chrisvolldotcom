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
  }
};
