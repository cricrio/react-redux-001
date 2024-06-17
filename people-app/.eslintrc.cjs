module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./jsconfig.json'],
  },
  settings: {
    react: {
      version: '18.2',
      'import/resolver': {
        'custom-alias': {
          alias: {
            '@': './src',
            '@routes/': './src/routes',
            '@component': './src/component',
          },
        },
      },
    },
  },
  plugins: ['react-refresh', 'tailwindcss', 'import'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
    'no-console': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
    //import
    'import/no-cycle': 'error',
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/routes/**',
            group: 'internal',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
          },
          {
            pattern: '@/services/**',
            group: 'internal',
          },
          {
            pattern: '@/hooks/**',
            group: 'internal',
          },
          {
            pattern: '@/utils/**',
            group: 'internal',
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
    'tailwindcss/no-custom-classname': 'off',
  },
};

