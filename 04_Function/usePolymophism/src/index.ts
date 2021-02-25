
type Filter = {
  <T>(array: T[], f:(item: T) => boolean): T[]
}

let filter: Filter = (array, f) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

console.log(filter([1,2,3,4] , _ => _ < 3))
console.log(filter(['a','b','c'] , _ => _ !== 'b'))

let names = [
  {firstName: 'beth'},
  {firstName: 'caitlyn'},
  {firstName: 'xin'},
  {firstName: 'beleth'}  
]
console.log(filter(names, _ => _.firstName.startsWith('b')))


// map
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = []
  for (let i = 0; i < array.length; i++){
    result[i] = f(array[i])
  }
  return result
}

// 4.2.3 ジェネリックの型推論
// この場合、T -> string, U -> boolean
console.log(map(
  ['a','b','c'],
  _ => _ === 'a'
))

// 4.2.4 ジェネリック型エイリアス
// HTMLのイベントを扱う型を宣言してみる
/**
 * target: 対象のオブジェクト
 * type: 発生したイベント
 */
type MyEvent<T> = {
  target: T
  type: string
}
// 本によるとこうなのだが、HTMLButtonElementでエラーになるのでコメントアウト。
// type ButtonEvent = MyEvent<HTMLButtonElement>
// let myEvent: MyEvent<HTMLButtonElement | null> = {
//   target: document.querySelector('#myButton'),
//   type: 'click'
// }

type TimeEvent<T> = {
  event: MyEvent<T>
  from: Date
  to: Date
}
function triggerEvent<T>(event: TimeEvent<T>): void {
  // 本当はなにかの処理が有る…
}
// triggerEvent({
//   target: document.querySelector('#myButton'),
//   type: 'mouseover'
// })


// 4.2.5 制限付きポリモーフィズム
// 二分木を実装する。

/**
 * 通常の木
 */
type TreeNode = {
  value: string
}

/**
 * 子ノードを持っていない葉
 */
// &は「交差」。「3.2.9.2 合併型と交差型」参照。
// 要素的にはvalueとisLeafを持つ。
type LeafNode = TreeNode & {
  isLeaf: true
}

/**
 * 子ノードを持っているNodeTree
 */
// [TreeNode, TreeNode]はタプル。
// 要素的にはvalueとchildrenを持つ。
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

let tree_a: TreeNode = {value: 'a'}
// trueしか指定できないくせに宣言しないとイケないみたい。
let tree_b: LeafNode = {value: 'b', isLeaf:true}
let tree_c: InnerNode = {value: 'c', children:[tree_b]}
