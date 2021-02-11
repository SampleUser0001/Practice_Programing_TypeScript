let tuple_a: [string, string, number] = ['malcom', 'gladwell', 1963]

// これは代入できない。
// taple_a = ['queen', 'elizabeth', 'ii', 1926]

// ([number] | [number,number])
let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]

// 少なくとも1つで可変長のリスト
let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']

// 不均一なリスト
let taple_list: [number, boolean, ...string[]] = [1, false, 'a','b','c']

// イミュータブル（変更できない）タプル
let readonly_tuple: readonly number[] = [1,2,3]
let bs: readonly number[] = readonly_tuple.concat(4) // 末尾に4を追加して、新しい配列を作成する。
// [1,2,3,4]
console.log(bs)

let three = bs[2]

// 配列長の外なので代入できない。
// as[4] = 5 

// readonlyなのでpushもできない。
// as.push(6)
