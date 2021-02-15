# 4章 関数

- [4章 関数](#4章-関数)
  - [関数の宣言](#関数の宣言)

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

