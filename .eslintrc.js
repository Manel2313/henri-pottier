const jsConfig = require('./jsconfig.json');

const { baseUrl, paths } = jsConfig.compilerOptions;
const aliasPaths = Object.keys(paths);

const aliasMap = aliasPaths.map((aliasPath) => [
  aliasPath.replace('/*', ''),
  `${baseUrl}/${paths[aliasPath][0].replace('./', '').replace('/*', '')}`,
]);

module.exports = {
  extends: [
    'next/core-web-vitals',
    'next',
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jsx-a11y'],
  rules: {
    'import/no-unresolved': [0, { caseSensitive: false }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx'],
        map: aliasMap,
      },
    },
  },
};
