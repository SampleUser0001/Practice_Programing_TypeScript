/**
 * 引数の型がstringの場合trueを返す。
 * 
 * 「a is string」が重要。
 * これがないと他のfunctionで呼び出されたときに型推論が働かない。
 */
function isString(a: unknown): a is string {
  return typeof a === 'string'
}

// この辺はまあいいとして・・・
console.log(isString('a'))
console.log(isString([7]))

function parseInput(input: string | number) {
  let formattedInput: string
  if (isString(input)){
    // 「a is string」がない場合はここでエラーになる。
    formattedInput = input.toUpperCase()
  }
}
