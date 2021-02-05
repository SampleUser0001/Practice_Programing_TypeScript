// unknown型のサンプル

let unknownTypeValue: unknown = 10
let booleanValue = unknownTypeValue === 123

// これがエラーになる
// let maybeErrorByUnknown = unknownTypeValue + booleanValue

if (typeof unknownTypeValue === 'number'){
  // こっちは問題ない
  let notErrorByUnknown = unknownTypeValue + 10
}
