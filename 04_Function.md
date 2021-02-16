# 4章 関数

- [4章 関数](#4章-関数)
  - [関数の宣言](#関数の宣言)
    - [オプションパラメータとデフォルトパラメータ](#オプションパラメータとデフォルトパラメータ)
      - [オプションパラメータ](#オプションパラメータ)
      - [デフォルトパラメータ](#デフォルトパラメータ)
    - [レストパラメータ](#レストパラメータ)
    - [call, apply, bind](#call-apply-bind)

## 関数の宣言

戻り値の型は型推論される。
```ts
function add(a: number, b:number) {
  return a + b
}
```

明示的に宣言もできる。
``` ts
function add(a: number, b:number): number {
  return a + b
}
```

``` ts
// 名前付き関数
function greet(name: string){
  return 'Hello ' + name
}

// 関数式
let greet2 = function(name: string){
  return 'Hello ' + name
}

// アロー関数式
let greet3 = (name: string) => {
  return 'Hello ' + name
}

// アロー関数の省略気泡
let greet4 = (name: string) =>
  'Hello ' + name

// 関数コンストラクタ（非推奨）
let greet5 = new Function('name', 'return "Hello " + name')
```

### オプションパラメータとデフォルトパラメータ

#### オプションパラメータ

「?」を書くと省略可能にできる。

``` ts : ./04_Function/optionParameters/src/sample.ts
function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'Not signed in.')
}

log('hoge')
log('piyo','da763be')
```

``` txt
7:23:27 PM hoge Not signed in.
7:23:27 PM piyo da763be
```

#### デフォルトパラメータ

関数の引数にデフォルト値を設定できる。

``` ts : ./04_Function/defaultParameters/src/sample.ts
const USER_ID = 'da763be'

function log(message: string, userId = 'Not signed in.') {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId)
}
log('hoge')
log('piyo',USER_ID)

type Context = {
  appId?: string
  userId?: string
}
function log2(message:string, context: Context = {}){
  let time = new Date().toISOString()
  console.log(time, message, context.userId)
}

log2('hoge')
log2('piyo',{userId: USER_ID})
log2('fuga',{appId: 'appid'})
```

``` txt
7:26:30 PM hoge Not signed in.
7:26:30 PM piyo da763be
2021-02-16T10:26:30.930Z hoge undefined
2021-02-16T10:26:30.931Z piyo da763be
2021-02-16T10:26:30.931Z fuga undefined
```
…非表示になるわけじゃないのね。

### レストパラメータ

可変個数の引数を設定できる。

[./04_Function/restParameters/src/index.ts](./04_Function/restParameters/src/index.ts)

### call, apply, bind

リフレクション・・・？

[./04_Function/call_apply_bind/src/index.ts](./04_Function/call_apply_bind/src/index.ts)

