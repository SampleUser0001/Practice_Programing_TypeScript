/**
 * ユーザ管理プログラム
 */

import { isDate } from "node:util"

// サーバから取得した既存のユーザ
type ExistingUser = {
  id: number
  name: string
}

// サーバの保管されていない、これから登録する予定のユーザ
type NewUser = {
  name: string
}

// ユーザを削除する機能を実装する。
function deleteUser(user: {id?: number, name:string}){
  // deleteはオブジェクトから要素を削除する文
  delete user.id
}

// 動作確認する。
let existingUser: ExistingUser = {
  id: 123456,
  name: 'Ima User'
}

console.log(existingUser)

// このタイミングだとnumber
console.log(typeof existingUser.id)

deleteUser(existingUser)
console.log(existingUser)
// このタイミングだとundefined
console.log(typeof existingUser.id)
