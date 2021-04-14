# 10章 名前空間とモジュール

- [10章 名前空間とモジュール](#10章-名前空間とモジュール)
  - [インポート・エクスポート](#インポートエクスポート)
  - [動的インポート](#動的インポート)
  - [名前空間](#名前空間)

## インポート・エクスポート

[10_Namespace_and_modules/importExport/src/a.ts](10_Namespace_and_modules/importExport/src/a.ts)

``` ts
export function hoge() {
  console.log('hoge')
}

export function piyo() {
  return 'piyo'
}
```

[10_Namespace_and_modules/importExport/src/index.ts](10_Namespace_and_modules/importExport/src/index.ts)

``` ts
import {hoge, piyo} from './a'

hoge()
console.log(piyo())
```

## 動的インポート

必要になったときにインポートすることによって、最初に画面表示されるまでの時間を短縮する。

import時に下記のどちらかに従う。

1. 文字列を変数に割り当てることなく、文字列リテラルをimportに直接渡します。
2. 式をimportに渡し、モジュールのシグネチャを手動でアノテートします。

tsconfig.json

``` json
{
  "compilerOptions": {
    "lib": ["es2015"],
    "module": "esnext", // この設定が必要。
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

## 名前空間

別の機会に実施。

モジュールのインポート/エクスポートと異なりグローバルに展開されるので、できればインポート/エクスポートを使ったほうがいい。

