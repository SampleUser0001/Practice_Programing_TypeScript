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
