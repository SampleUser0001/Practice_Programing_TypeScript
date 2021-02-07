# 3章 型について

- [3章 型について](#3章-型について)
  - [any](#any)
    - [やってみた](#やってみた)
  - [unknown](#unknown)
    - [やってみた](#やってみた-1)
  - [boolean](#boolean)
    - [リテラル型](#リテラル型)
      - [宣言例](#宣言例)
  - [number](#number)
    - [やってみた](#やってみた-2)
  - [bigint](#bigint)
  - [string](#string)
    - [宣言例](#宣言例-1)
  - [symbol](#symbol)
  - [その他実装中に気づいたこと](#その他実装中に気づいたこと)

## any 

Javaで言うところのObjectとプリミティブ型の両方の親みたいな型。  
`use strict`しているうちは型宣言しないと使えない。  
（宣言しないで使えるJavaScriptがどうかと思うんですが。）  

### やってみた

```ts : src/anyTypeErrorSample.ts
let a = 666
let b = ['denger']
let mayBeError = a + b

console.log(mayBeError)
```

コンパイル結果
```
src/anyTypeErrorSample.ts:4:18 - error TS2365: Operator '+' cannot be applied to types 'number' and 'string[]'.

4 let mayBeError = a + b
                   ~~~~~


Found 1 error.

```

## unknown

事前に型がわからないときに使用する。  
型チェックをしないと、この型の変数は使用できない。

### やってみた

```ts : src/useUnknown.ts
// unknown型のサンプル

let unknownTypeValue: unknown = 10
let booleanValue = unknownTypeValue === 123

// これがエラーになる
let maybeErrorByUnknown = unknownTypeValue + booleanValue

if (typeof unknownTypeValue === 'number'){
  // こっちは問題ない
  let notErrorByUnknown = unknownTypeValue + 10
}
```

コンパイル
```
src/useUnknown.ts:6:27 - error TS2571: Object is of type 'unknown'.

6 let maybeErrorByUnknown = unknownTypeValue + booleanValue
                            ~~~~~~~~~~~~~~~~


Found 1 error.

```

## boolean

普通のboolean以外に、true, false…という名前の型として使えるらしい。

### リテラル型

引用。
```
ただ1つの値を表し、それ以外の値は受け入れない型
```
…constとは違うらしいが、別の箇所で扱う（らしい）。

#### 宣言例

```ts 
let b: true = true
```

## number

すべての数値型。整数も浮動小数点数も無限大もNaNもこれを使う。  
アンダースコアを使って区切ることができる。

### やってみた

```ts : src/useNumber.ts
// numberにアンダースコアを使って代入する。

const NUMBER_UNDER_SCORE = 1_000_000

console.log(NUMBER_UNDER_SCORE)
```

実行結果
```
ittimfn@penguin:~/Practice_Programing_TypeScript/03_About_types$ node ./dist/useNumber.js
1000000
```

## bigint

丸めエラー等が発生せず、大きい値を扱うことができる。

現時点で必ずしもすべてのJavaScriptで扱えるわけではない。  
エラーの例
```
ターゲットが ES2020 未満の場合、bigint リテラルは使用できません。
```

## string

文字列。連結（+）やsliceが使える。

### 宣言例

```ts 
let name: 'Taro' = 'Taro'
```

## symbol

ES2015で導入された。

## その他実装中に気づいたこと

変数はソース全体で一意でなくてはいけない。  
