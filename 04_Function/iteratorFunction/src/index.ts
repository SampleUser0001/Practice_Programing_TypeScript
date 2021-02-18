
let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  }
}

for ( let a of numbers ) {
  console.log(a)
}
console.log('finish.')
console.log()

let allNumbers = [...numbers]
console.log(allNumbers)
console.log()
// 1〜10の配列


let [one, two, ...rest] = numbers
console.log(one)
console.log(two)
console.log(rest)
console.log()
// one = 1
// two = 2
// rest = 3〜10の配列