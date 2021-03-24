type IsString<T> = T extends string ? true : false

type A = IsString<string>
type B = IsString<number>

let aIsTrue: A = true

// これはエラー。
// let bIsTrue: B = true

// これもエラー。
// let aIsFalse: A = false

let bIsFalse: B = false
