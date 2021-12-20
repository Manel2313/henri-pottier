const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
  ignoreFiles: ['**/*.js', '**/*.jsx'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    indentation: 2,
    'order/properties-order': [sortOrderSmacss({ emptyLineBefore: 'always' })],
  },
};
