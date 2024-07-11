import js from '@eslint/js';
import eslint_rnc from '@react-native-community/eslint-config';
import eslint_airbnb from 'eslint-config-airbnb';
import eslint_airbnb_ts from 'eslint-config-airbnb-typescript';
import babelParser from '@babel/eslint-parser';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  //js.configs.recommended,
  {
    files: ['**/*.tsx'],
    plugins: {},
    rules: {
      semi: ['warn', 'always'],
      indent: ['error', 2],
      quotes: ['error', 'single'],
      //"no-unused-vars": "warn",
    },
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2022,

      globals: {
        ...globals.browser,
      },
    },
  },
];
