# 2章 TypeScript：全体像

- [2章 TypeScript：全体像](#2章-typescript全体像)
  - [init](#init)
  - [tsconfig.json](#tsconfigjson)
    - [オプション説明](#オプション説明)
  - [tslint.json](#tslintjson)
  - [src/index.ts](#srcindexts)
  - [コンパイル](#コンパイル)
  - [実行](#実行)
    - [実行結果](#実行結果)

## init

```
cd 02_TypeScript_Overview
npm init
npm install --save-dev typescript tslint @types/node
```

## tsconfig.json

コンパイルで使う。
```json:tsconfig.json
{
  "compilerOptions": {
    "lib": ["es2015"],
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "target": "es2015"
  },
  "include": [
    "src"
  ]
}
```

### オプション説明

| オプション | 説明 |
| :-- | :-- |
| src | コンパイル対象のディレクトリ |
| lib | どのJavaScriptライブラリを使用しているか |
| module | コンパイル後のモジュールシステム |
| outDir | コンパイル結果の出力先 |
| strict | `use strict` |
| target | コンパイル後のJavaScriptのバージョン |

## tslint.json

TSLint（コーディングのルールを決める）の設定ファイル。

```json:tslint.json
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "rules": {
    "semicolon": false,
    "trailing-comma": false
  }
}
```

## src/index.ts

```ts:src/index.ts
console.log('Hello TypeScript!')
```

## コンパイル

```
./node_modules/.bin/tsc
```

## 実行

```
node ./dist/index.js
```

### 実行結果

```
ittimfn@penguin:~/Practice_Programing_TypeScript/02_TypeScript_Overview$ node ./dist/index.js
Hello TypeScript!
```

