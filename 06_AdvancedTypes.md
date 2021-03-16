# 6章 高度な型

## 変性(variance)

オブジェクトに対する操作などで、変数の型が変わってしまうこと。

### オブジェクトのメンバ変数

[./06_AdvancedTypes/varianceTest/src/index.ts](./06_AdvancedTypes/varianceTest/src/index.ts)

### 関数

…ふつーにJavaと同じに見えるぞ？

[./06_AdvancedTypes/varianceFunction/src/index.ts](./06_AdvancedTypes/varianceFunction/src/index.ts)

## 型の拡大

できればtypeofしたときにイミュータブルであることを表示してほしいんですが。

[./06_AdvancedTypes/typeWidening/src/index.ts](./06_AdvancedTypes/typeWidening/src/index.ts)

### constアサーション

[./06_AdvancedTypes/constAssertsion/src/index.ts](./06_AdvancedTypes/constAssertsion/src/index.ts)

``` typescript
let a = {x:3}               // [x: number]
let b: {X:3}                // {x: 3}
let c = {x:3} as const      // {readonly x: 3}

let d = [1, {x:2}]          // (number | {x: number})[]
let e = [1, {x:2}] as const // readonly [1, {readonly x:2}]
```

### 参考

- [Qiita:なぜ TypeScript の型システムが健全性を諦めているか](https://qiita.com/na-o-ys/items/aa56d678cdf0de2bdd79)
