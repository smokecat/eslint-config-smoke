module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Possible Errors
    'for-direction': 2,
    'getter-return': 2,
    'no-async-promise-executor': 2,
    'no-await-in-loop': 0,
    'no-compare-neg-zero': 2,
    'no-cond-assign': [2, 'except-parens'],
    'no-console': 0,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': [2, { allowEmptyCatch: false }],
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': [2, 'both'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': [
      2,
      {
        skipStrings: true,
        skipComments: false,
      },
    ],
    'no-misleading-character-class': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'require-atomic-updates': 2, // 竞态条件
    'use-isnan': 2,
    'valid-typeof': 2,

    // Best Practices
    'accessor-pairs': 0,
    'array-callback-return': [2, { allowImplicit: true }],
    'block-scoped-var': 0,
    'class-methods-use-this': 0,
    'complexity': [0, 20],
    'consistent-return': [2, { treatUndefinedAsUnspecified: false }],
    'curly': [2, 'multi-line'],
    'default-case': 0, // 使用注释 // no default 声明不需要default 分支
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': [2, 'smart'],
    'guard-for-in': 0,
    'max-classes-per-file': [1, 5], // 每个文件包含的类的最大数量
    'no-alert': 1,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 1,
    'no-empty-function': [2, { allow: ['constructors'] }],
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2, // 使用注释 // falls through 声明需要落空case
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 0,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 0,
    'no-magic-numbers': [0, { ignoreArrayIndexes: true }], // 魔法数字
    'no-multi-spaces': [
      2,
      {
        ignoreEOLComments: false,
        exceptions: { Property: true },
      },
    ],
    'no-multi-str': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-redeclare': 2,
    'no-restricted-properties': 0,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [1, { allowShortCircuit: true }],
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-catch': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-useless-return': 0,
    'no-void': 2,
    'no-warning-comments': 0,
    'no-with': 2,
    'prefer-named-capture-group': 0,
    'prefer-promise-reject-errors': 0,
    'radix': 2,
    'require-await': 0,
    'require-unicode-regexp': 2,
    'vars-on-top': 0,
    'wrap-iife': [2, 'inside', { functionPrototypeMethods: true }],
    'yoda': [2, 'never', { exceptRange: true }],

    // Variables
    'init-declarations': 0,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': [2],
    'no-shadow': 0,
    'no-shadow-restricted-names': [2],
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-unused-vars': 1,
    'no-use-before-define': [2, { functions: false }],

    // Node.js and CommonJS

    // Stylistic Issues
    'array-bracket-newline': 0,
    'array-bracket-spacing': 2,
    'array-element-newline': 0,
    'block-spacing': 0,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'camelcase': [2, { properties: 'always' }],
    'capitalized-comments': 0,
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'consistent-this': 2,
    'eol-last': 2,
    'func-call-spacing': 2,
    'func-name-matching': 1,
    'func-names': 0,
    'func-style': 0,
    'function-paren-newline': 0,
    'id-blacklist': [2],
    'id-length': 0,
    'id-match': 0,
    'implicit-arrow-linebreak': 0,
    'indent': [2, 2, { SwitchCase: 1 }], // 缩进级别，精细选项
    'jsx-quotes': 0,
    'key-spacing': [2, { mode: 'strict' }],
    'keyword-spacing': 2,
    'line-comment-position': 0,
    'linebreak-style': 2,
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
        allowClassStart: true,
      },
    ],
    'lines-between-class-members': [0, 'always', { exceptAfterSingleLine: true }],
    'max-depth': [2, 10],
    'max-len': [
      2,
      {
        code: 200,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
      },
    ],
    'max-lines': [2, 500],
    'max-lines-per-function': [2, 120],
    'max-nested-callbacks': [2, 10],
    'max-params': [2, 15],
    'max-statements': [2, 50],
    'max-statements-per-line': [2, { max: 3 }],
    'multiline-comment-style': 0,
    'multiline-ternary': [2, 'always-multiline'],
    'new-cap': 0,
    'new-parens': 2,
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }],
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 1,
    'no-multiple-empty-lines': 2,
    'no-negated-condition': 0,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': [2], // 禁用特定的语法
    'no-tabs': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'nonblock-statement-body-position': 2,
    'object-curly-newline': [2, { multiline: true }],
    'object-curly-spacing': [2, 'always'],
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],
    'one-var': 0,
    'one-var-declaration-per-line': [2, 'initializations'],
    'operator-assignment': 2,
    'operator-linebreak': [2, 'before'],
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': 0,
    'prefer-object-spread': 0,
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single', { avoidEscape: true }],
    'semi': 2,
    'semi-spacing': 2,
    'semi-style': 2,
    'sort-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'switch-colon-spacing': 2,
    'template-tag-spacing': 2,
    'unicode-bom': 2,
    'wrap-regex': 0,

    // ECMAScript 6
    'arrow-body-style': 2,
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'constructor-super': 2,
    'generator-star-spacing': 2,
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 1,
    'no-new-symbol': 2,
    'no-restricted-imports': 2, // 禁用特定import
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 0,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': [2, 'always', { avoidQuotes: true, ignoreConstructors: true }],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': [
      1,
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      { enforceForRenamedProperties: false },
    ],
    'prefer-rest-params': 2,
    'prefer-spread': 1,
    'prefer-template': 2,
    'require-yield': 2,
    'rest-spread-spacing': 2,
    'sort-imports': 0,
    'symbol-description': 1,
    'template-curly-spacing': 2,
    'yield-star-spacing': [2, 'before'],
  },
};
