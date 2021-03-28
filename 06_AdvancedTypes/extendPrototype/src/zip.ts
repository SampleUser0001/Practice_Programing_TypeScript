// 配列にzip関数を追加する。
interface Array<T> {
  zip<U>(list: U[]): [T, U][]
}

Array.prototype.zip = function(list) {
  return this.map((v,k) => [v, list[k]])
}