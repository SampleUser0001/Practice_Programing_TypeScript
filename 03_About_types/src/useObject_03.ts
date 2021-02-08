let c: {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'ganondorf'
}
class Person {
  constructor(
    public firstName: string,
    public lastName: string
  ){}
}
// メンバ変数の型があっていればこれでもいいらしい。
c = new Person('hoge','piyo')