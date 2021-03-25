# 6章 高度な型

- [6章 高度な型](#6章-高度な型)
  - [変性(variance)](#変性variance)
    - [オブジェクトのメンバ変数](#オブジェクトのメンバ変数)
    - [関数](#関数)
    - [参考](#参考)
  - [型の拡大](#型の拡大)
    - [constアサーション](#constアサーション)
    - [過剰プロパティチェック(Freshness)](#過剰プロパティチェックfreshness)
    - [型の絞り込み(refinement)](#型の絞り込みrefinement)
    - [タグ付け合併型](#タグ付け合併型)
  - [完全性](#完全性)
  - [高度なオブジェクト型](#高度なオブジェクト型)
    - [型演算](#型演算)
      - [ルックアップ型](#ルックアップ型)
      - [keyof演算子](#keyof演算子)
    - [レコード型](#レコード型)
    - [マップ型](#マップ型)
    - [コンパニオンオブジェクトパターン](#コンパニオンオブジェクトパターン)
  - [関数にまつわる高度な型](#関数にまつわる高度な型)
    - [タプルについての型推論の改善](#タプルについての型推論の改善)
    - [ユーザ定義型ガード](#ユーザ定義型ガード)
  - [条件型](#条件型)
    - [分配条件型](#分配条件型)
    - [inferキーワード](#inferキーワード)
    - [組み込みの条件型](#組み込みの条件型)
      - [参考](#参考-1)
  - [備考](#備考)

## 変性(variance)

オブジェクトに対する操作などで、変数の型が変わってしまうこと。

### オブジェクトのメンバ変数

[./06_AdvancedTypes/varianceTest/src/index.ts](./06_AdvancedTypes/varianceTest/src/index.ts)

### 関数

…ふつーにJavaと同じに見えるぞ？

[./06_AdvancedTypes/varianceFunction/src/index.ts](./06_AdvancedTypes/varianceFunction/src/index.ts)

### 参考

- [Qiita:なぜ TypeScript の型システムが健全性を諦めているか](https://qiita.com/na-o-ys/items/aa56d678cdf0de2bdd79)

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

### 過剰プロパティチェック(Freshness)

TypeScriptは構造でクラスを判断するが、構造が同じでもプロパティ（メンバ変数名）が間違っている場合はエラーを出す。  
プロパティに代入される形で宣言される場合、通常のオブジェクトに拡大され、フレッシュさが消滅する。

[./06_AdvancedTypes/freshness/src/index.ts](./06_AdvancedTypes/freshness/src/index.ts)

本によると「なんかこういう仕様があるらしい」くらいの認識でいいらしい。

### 型の絞り込み(refinement)

[./06_AdvancedTypes/typeRefinement/src/index.ts](./06_AdvancedTypes/typeRefinement/src/index.ts)

### タグ付け合併型

うまく実装できないな？

[./06_AdvancedTypes/tagUnion/src/index.ts](./06_AdvancedTypes/tagUnion/src/index.ts)

## 完全性

すべての分岐を実装できているか判断してくれる。  
本来returnがないとNGなときなどにワーニングを上げたりしてくれる。

[./06_AdvancedTypes/totality/src/index.ts](./06_AdvancedTypes/totality/src/index.ts)

TSCフラグ：noImplicitReturnsを有効にするともっと厳しくしてくれる。

## 高度なオブジェクト型

### 型演算

#### ルックアップ型

型の一部分をstringや型を指定して、別の型として宣言できる。

[./06_AdvancedTypes/typeLookup/src/index.ts](./06_AdvancedTypes/typeLookup/src/index.ts)

#### keyof演算子

``` typescript
type ColorsOriginal = {
  red: 'RED'
  blue: 'BLUE'
}

// red,blueをキーとして持っている型から、'red' | 'blue'型を生成
type Colors = keyof ColorsOriginal;
let color: Colors
color = 'red'
console.log(color)
color = 'blue'
console.log(color)
```

[./06_AdvancedTypes/keyof/src/index.ts](./06_AdvancedTypes/keyof/src/index.ts)

- [https://typescript-jp.gitbook.io/deep-dive/type-system/moving-types#knokyapucha](https://typescript-jp.gitbook.io/deep-dive/type-system/moving-types#knokyapucha)

### レコード型

Mapに見えるが、Mapは別にあるらしい。

[./06_AdvancedTypes/recodeType/src/index.ts](./06_AdvancedTypes/recodeType/src/index.ts)

### マップ型

項目が足りていないときに出るエラーがレコード型と異なる。

[./06_AdvancedTypes/mapType/src/index.ts](./06_AdvancedTypes/mapType/src/index.ts)

いくつかデフォルトで用意されている。
- Record\<Keys, Values\>
  - Keys型のキーとValues型の値を持つオブジェクト。
- Partial\<Object\>
  - Object内のすべてのフィールドを省略可能と指定します。
- Required\<Object\>
  - Object内のすべてのフィールドを必須（省略不可）と指定します。
- Readonly\<Object\>
  - Object内のすべてのフィールドを読み取り専用と指定します。
- Pick\<Object, Keys\>
  - 指定されたKeysだけを持つ、Objectのサブタイプを返します。

### コンパニオンオブジェクトパターン

型名と変数名で同じ名前が使える。  
用途がよくわからない…

[./06_AdvancedTypes/companionObjectPattern/src/index.ts](./06_AdvancedTypes/companionObjectPattern/src/index.ts)

## 関数にまつわる高度な型

### タプルについての型推論の改善

全然わからん。

[./06_AdvancedTypes/typeInterface/src/index.ts](./06_AdvancedTypes/typeInterface/src/index.ts)

### ユーザ定義型ガード

型の絞り込みは通常、スコープ内でしか働かないが、それを持ち出せる。

[./06_AdvancedTypes/userDefinedTypeGuard/src/index.ts](./06_AdvancedTypes/userDefinedTypeGuard/src/index.ts)

## 条件型

型の割り当て自体を条件式として使用できる。

[./06_AdvancedTypes/conditionalType/src/index.ts](./06_AdvancedTypes/conditionalType/src/index.ts)

### 分配条件型

[./06_AdvancedTypes/distributionConditionalType/src/index.ts](./06_AdvancedTypes/distributionConditionalType/src/index.ts)

### inferキーワード

[./06_AdvancedTypes/inferKeyword/src/index.ts](06_AdvancedTypes/inferKeyword/src/index.ts)

### 組み込みの条件型

難しいことしなくても使える!

[06_AdvancedTypes/builtInConditionalType/src/index.ts](06_AdvancedTypes/builtInConditionalType/src/index.ts)

#### 参考

- ReturnType
  - [ひと夏の技術TypeScriptで関数の返り値を型に変換する(ReturnTypeを使う)](https://tech-1natsu.hatenablog.com/entry/2018/12/09/004338)

## 備考

- null, undefined, NaN, 0, -0, "", falseはfalseと判定される。それ以外はtrueと判定される。
