
// function* でジェネレータ関数の宣言。
// Generatorが戻ってくる。
function* createFibonacchiGenerator() {
  let a = 0
  let b = 1
  // 何回でも動かせる
  while(true) {
    // yieldで宣言した値をGeneratorの結果として返す。
    yield a;

    // 次に呼び出されたときの値を設定する。
    [a, b] = [b, a + b]
  }
}

let fibonacchiGenerator = createFibonacchiGenerator()
console.log(fibonacchiGenerator.next())
console.log(fibonacchiGenerator.next())
console.log(fibonacchiGenerator.next())
console.log(fibonacchiGenerator.next())
console.log(fibonacchiGenerator.next())
console.log(fibonacchiGenerator.next())
// 実行結果
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 5, done: false }

console.log()

// 明示的に戻り値の型としてアノテートすることもできる。
function* createNumbers(): Generator<number> {
  let n=0
  while(1){
    yield n++
  }
}
let numbers = createNumbers()
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
// 実行結果
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }

console.log()
// 有限回呼び出せる
function* limitedNumberOfTimes(){
  let n = 0
  // 3回まで呼び出せる
  while(n<3){
    yield n++
  }
}
let limited = limitedNumberOfTimes()
console.log(limited.next())
console.log(limited.next())
console.log(limited.next())
console.log(limited.next())
// 実行結果
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// 4回目の呼び出しで値がundefinedになり、doneがtrueになった。
// { value: undefined, done: true }
