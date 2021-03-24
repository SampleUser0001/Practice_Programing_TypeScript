let a = [1, true] // (number | boolean) []
console.log(typeof(a[0]))
console.log(typeof(a[1]))

// 本に書いてあるの打ってみたけどコンパイルとおらんぞ？
// function tuple<T extends unknown[]>(...ts: T)): T{
//   return ts
// }