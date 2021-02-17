// thisを使ってみる

let x = {
  a() {
    return this
  }
}

console.log(x.a())
// { a: [Function: a] }

let a = x.a
console.log(a())
// undefined

// thisがany判定されてコンパイルでコケる。
// function fancyDate() {
//   return `${this.getFullYear()}/${this.getMonth() + 1}/${this.getDate()}`
// }
// fancyDate.call(new Date)