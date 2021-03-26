class User {
  // 普通の宣言
  // id: string
  
  // 明確な割当アサーション
  id!: string
  constructor(){}
}

function fetchUser(user: User) {
  user.id = 'hogehoge'  
}

let user = new User()
// 実際にはここでuser.idに値が代入される。
fetchUser(user)
// 普通の宣言だとここがエラーになる。
console.log(user.id.toUpperCase())
