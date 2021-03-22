type ColorsOriginal = {
  red: 'RED'
  blue: 'BLUE'
}

// red,blueをキーとして持っている型から、'red' | 'blue'型を生成
type Colors = keyof ColorsOriginal;
let color: Colors
color = 'red'
console.log(color)
color = 'blue'
console.log(color)
