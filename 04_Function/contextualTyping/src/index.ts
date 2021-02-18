// コールバック関数
// 引数として別の関数に渡される関数のこと。

function times (
  f: (index: number) => void,
  n: number
) {
  for (let i=0; i<n; i++) {
    f(i)
  }
}

// これだけだとnの型が不明だが、TypeScript的には文脈でnumberと判断する。
times(n => console.log(n), 5)
