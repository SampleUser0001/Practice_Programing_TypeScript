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
    - [やってみた](#やってみた-3)
  - [Object](#object)
    - [実装例](#実装例)
  - [型エイリアス](#型エイリアス)
  - [合併型/交差型](#合併型交差型)
  - [配列](#配列)
  - [タプル](#タプル)
  - [null, undefined, void, never](#null-undefined-void-never)
  - [列挙型 : enum](#列挙型--enum)
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

アプリケーション全体で一意な値を宣言するときに使う型？

ES2015で導入された。

### やってみた

``` ts : use/Symbol.ts
let symbol_a = Symbol('hoge')
let symbol_b = Symbol('hoge')

// falseになる
console.log(symbol_a === symbol_b)
```

## Object

TypeScript的にはObjectの中身は管理しないが、メンバ変数の型を宣言しておく必要がある。  

### 実装例

```ts : useObject_01.ts
let object_a: object = {
  b: 'x'
}
// 参照できない
// console.log(object_a.b)
```

``` ts : useObject_02.ts
// オブジェクトリテラル表記と言うらしい。
let object_b: {
  b: number
} = {
  b: 10
}
// これはOK。
console.log(object_b.b)
```

```ts : useObject_03.ts
let c: {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'ganondorf'
}
class Person {
  constructor(
    public firstName: string,
    public lastName: string
  ){}
}
// メンバ変数の型があっていればこれでもいいらしい。
c = new Person('hoge','piyo')
```

```ts : useObjectg_04.ts
// 引数があったりなかったりする場合の宣言
// [key:number]:booleanはインデックスシグネチャというらしい。
// ただし、numberかstringでなければ宣言できない。
let obj_c: {
  i: number
  s?: string
  [key:number]:boolean
}
// 全部OK。
obj_c = {i: 10}
obj_c = {i: 10, s: 'hoge'}
obj_c = {i: 10, 1:true}
obj_c = {i: 10, 1:true, 100: true}
obj_c = {i: 10, s: 'hogehoge', 1:true, 100: true}
```

``` ts : useObject_05.ts
// readonlyを使ってみる
let user: {
  readonly firstName: string
} = {
  firstName: 'hoge'
}
// これはできる
console.log(user.firstName)
// これはできない
// user.firstName = 'piyo'
```

## 型エイリアス

型に別名をつけることができる。

``` ts : src/useAlias.ts

type Age = number

type UseAliasPerson = {
  name: string
  age: Age
}

let person: UseAliasPerson = {
  name : 'hoge',
  age : 55
}
console.log('name',person.name)
console.log('age',person.age)
```

## 合併型/交差型

多重継承みたいなもんか・・・？

[./03_About_types/src/useUnionIntersection.ts](./03_About_types/src/useUnionIntersection.ts)

``` ts : src/useUnionIntersection.ts

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}

// 翻訳
// purrs:喉を鳴らす
// barks:ほえる
// wags:しっぽを振る

type CatOrDogBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let cat: CatOrDogBoth = {
  name: 'Mochimaru',
  purrs: true 
}
console.log(cat)

// Dog
let dog: CatOrDogBoth = {
  name: 'Haru',
  barks: true,
  wags: true
}
console.log(dog)

// 両方書いて良い。どちらかだけでも良い。
let newCat: CatOrDogBoth = {
  name: 'Tama',
  purrs: true
}
console.log(newCat)

// 両方書いて良い。どちらかだけでも良い。
let newDog: CatOrDogBoth = {
  name: 'Pochi',
  barks: true,
  wags: true
}
console.log(newDog)

// 両方書いて良い。
let kimera01: CatOrDogBoth = {
  name: 'huum',
  purrs: true,
  barks: true,
  wags: true
}
console.log(kimera01)

// ただしどちらにもなれないのはダメ。
// let newHoge: CatOrDogBoth = {
//   name:'hoge'
// }

// 両方書かないとだめ。
let kimera02: CatAndDog = {
  name: 'catanddog',
  purrs: true,
  barks: true,
  wags: true
}
console.log(kimera02)
```

実行結果。宣言していない値は出ない。

``` json
{ name: 'Mochimaru', purrs: true }
{ name: 'Haru', barks: true, wags: true }
{ name: 'Tama', purrs: true }
{ name: 'Pochi', barks: true, wags: true }
{ name: 'huum', purrs: true, barks: true, wags: true }
{ name: 'catanddog', purrs: true, barks: true, wags: true }
```

## 配列

型推論の重要性がわかるやつ。

``` ts : src/useArray.ts
let array_a = [1,2,3]
var array_b = ['a','b']
let array_c:string[] = ['a']

// 宣言時なら、複数の方を突っ込めるが、やめておいたほうがいい。
// 後で型判定をする必要が出てくる。
let array_d = [1, 'a'] // (string | number)[]
const array_e = [2, 'b'] // (string | number)[]

let array_f = ['red']
f.push('blue')
// これはエラー。
// f.push(true)

let array_g = [] // 何も代入されていないので、型推論が働かず、any[]になる。
array_g.push(1)
array_g.push('red') // any[]なのでなんでも突っ込める。

let h: number[] = []
h.push(1)
// これはエラー。
// h.push('red')
```

## タプル

配列の派生。

``` ts : src/usseTuple.ts
let tuple_a: [string, string, number] = ['malcom', 'gladwell', 1963]

// これは代入できない。
// taple_a = ['queen', 'elizabeth', 'ii', 1926]

// ([number] | [number,number])
let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]

// 少なくとも1つで可変長のリスト
let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']

// 不均一なリスト
let taple_list: [number, boolean, ...string[]] = [1, false, 'a','b','c']

// イミュータブル（変更できない）タプル
let readonly_tuple: readonly number[] = [1,2,3]
let bs: readonly number[] = readonly_tuple.concat(4) // 末尾に4を追加して、新しい配列を作成する。
// [1,2,3,4]
console.log(bs)

let three = bs[2]

// 配列長の外なので代入できない。
// as[4] = 5 

// readonlyなのでpushもできない。
// as.push(6)

```

## null, undefined, void, never

- undefined : 値が定義されていない
- null : 値が欠如している
- void : 型が存在しない
- never : 値が返らない
  - voidとの違いは、エラーが発生する場合や、無限ループをする場合にこちらを使う。

## 列挙型 : enum

``` ts : src/useEnum.ts

// 値は持たせても持たせなくても宣言できる。
enum Language {
  Japanese = 0,
  English = 1,
  Spanish = 2,
  Russian // ここは3になる。
}

const myFIrstLanguage = Language.Japanese
let mySecondLanguage = Language['English']

console.log(Language.Russian)

// 分割して書くことができる。
enum ProgramingLanguage {
  TypeScript = 0,
  JavaScript = 1
}
enum ProgramingLanguage {
  Java = 2
}
```

この本ではenumは非推奨らしい。

## その他実装中に気づいたこと

変数はソース全体で一意でなくてはいけない。  
