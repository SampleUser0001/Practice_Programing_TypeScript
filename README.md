# Practice_Programing_TypeScript
オライリーのプログラミングTypeScriptの勉強

## リンク

| 章名 | リンク |
| :-- | :-- |
| 1章 イントロダクション | [01_Introduction](./01_Introduction.md) |
| 2章 TypeScript：全体像 | [02_TypeScript_Overview](./02_TypeScript_Overview.md) |
| 3章 型について | [03_About_types](./03_About_types.md) |
| 4章 関数 | [04_Function](./04_Function.md) |
| 5章 クラスとインターフェース | [05_Class_and_Interface](./05_Class_and_Interface.md) |
| 6章 高度な型 | [06_AdvancedTypes](./06_AdvancedTypes.md) |
| 7章 エラー処理 | [07_ErrorHandling](./07_ErrorHandling.md) |
| 8章 非同期プログラミングと並行、並列処理 | [08_Asynchronous_programming_and_parallel_processing](./08_Asynchronous_programming_and_parallel_processing.md) |
| 9章 フロントエンドとバックエンドのフレームワーク| [09_Front-end_and_back-end_framework](./09_Front-end_and_back-end_framework.md) |


## init

``` sh
npm init -y
npm install --save-dev typescript tslint @types/node
mkdir src
touch tsconfig.json
```

``` json : tsconfig.json
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

```json : package.json
    "build": "npm run build:ts",
    "build:ts": "tsc ",
    "start:index": "node ./dist/index.js",
```

## 参考

- [オライリー:プログラミングTypeScript――スケールするJavaScriptアプリケーション開発](https://www.oreilly.co.jp/books/9784873119045/)
- [JavaScript Promiseの本](https://azu.github.io/promises-book/#introduction)
- [TypeScript Deep Dive 日本語版について](https://typescript-jp.gitbook.io/deep-dive/)
