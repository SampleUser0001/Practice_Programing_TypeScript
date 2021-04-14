# 10章 名前空間とモジュール

- [10章 名前空間とモジュール](#10章-名前空間とモジュール)
  - [インポート・エクスポート](#インポートエクスポート)

## インポート・エクスポート

a.ts

``` ts
export function hoge() {
  console.log('hoge')
}

export function piyo() {
  return 'piyo'
}
```

index.ts

``` ts
import {hoge, piyo} from './a'

hoge()
console.log(piyo())
```
