let a = 'x'
let b = 3
var c = true
const d = {x: 3}

enum E {X,Y,Z}
let e = E.X

console.log('---- let/var ----')
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log('-----------------')

const constA = 'x'
const constB = 3
const constC = true
const constE = E.X

console.log('----- const -----')
console.log(typeof constA)
console.log(typeof constB)
console.log(typeof constC)
console.log(typeof constE)
console.log('-----------------')
