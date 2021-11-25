# eslint-config-smoke

## usage

Install dependency

```shell
$ npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Install through npm

```shell
$ npm i -D eslint-config-smoke
```

Edit file `.eslintrc.js`

```js
// .eslintrc.js

module.exports = {
  extends: 'smoke',
  rules: {
    // override rules
  },
};
```


## Optional

### Prettier

Install dependency

```shell
$ npm i -D prettier eslint-config-prettier
```

Edit file `.prettierrc`

```json
{
  "singleQuote": true,
  "printWidth": 120,
  "proseWrap": "preserve",
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "endOfLine": "lf",
  "semi": true,
  "quoteProps": "consistent",
  "arrowParens": "avoid",
  "bracketSpacing": true
}
```