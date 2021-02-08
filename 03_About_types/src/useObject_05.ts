// readonlyを使ってみる
let user: {
  readonly firstName: string
} = {
  firstName: 'hoge'
}
// これはできる
console.log(user.firstName)
// これはできない
// user.firstName = 'piyo'
