// 引数があったりなかったりする場合の宣言
// [key:number]:booleanはインデックスシグネチャというらしい。
// ただし、numberかstringでなければ宣言できない。
let obj_c: {
  i: number
  s?: string
  [key:number]:boolean
}
// 全部OK。
obj_c = {i: 10}
obj_c = {i: 10, s: 'hoge'}
obj_c = {i: 10, 1:true}
obj_c = {i: 10, 1:true, 100: true}
obj_c = {i: 10, s: 'hogehoge', 1:true, 100: true}
