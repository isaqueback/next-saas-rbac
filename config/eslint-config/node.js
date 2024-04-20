/** @typedef {import('eslint').Linter.Config} LinterConfig */

/** @type { LinterConfig } */
module.exports = {
    extends: ['@rocketseat/eslint-config/node'],
    plugins: ['simple-import-sort'],
    rules: {
      'simple-import-sort/imports': 'error'
    }
  }