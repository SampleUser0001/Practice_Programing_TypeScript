const NUMBERS = [1,2,3]

function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}
console.log(sum(NUMBERS))

function sumVariadic(): number {
  return Array
    .from(arguments)
    .reduce((total, n) => total + n , 0)
}

// 引数の数が一致しない
// console.log(sumVariadic(1,2,3))

// レストパラメータ
function sumVariadicSafe(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0)
}
console.log(sumVariadicSafe(1,2,3))
