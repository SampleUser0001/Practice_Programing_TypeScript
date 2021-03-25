// Exclude
type A = number | string
type B = string
type C = Exclude<A , B> // number
// AとBを比較して、Bに含まれていないA型を返す。

// Extract
type D = Extract<A,B> // string
// AとBを比較して、Aに割り当てできる型を返す。

// NonNullable<T>
// nullとundefinedを除外したTを返す。
type E = {a?: number | null}
type F = NonNullable<E['a']> // number

// ReturnType<F>
// 関数の戻り値の型を取得できる。
const foo = ()=> {
  return {
    foo: 1,
    fooo: 2,
    foooo: 3
  }
}
type G = ReturnType<typeof foo> // number

// InstanceType<C>
// コンストラクタの返り値の型を返す。
type H = {new():I}
type I = {b:number}
type J = InstanceType<H> // {b:number}
