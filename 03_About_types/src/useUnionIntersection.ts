
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}

// 翻訳
// purrs:喉を鳴らす
// barks:ほえる
// wags:しっぽを振る

type CatOrDogBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let cat: CatOrDogBoth = {
  name: 'Mochimaru',
  purrs: true 
}
console.log(cat)

// Dog
let dog: CatOrDogBoth = {
  name: 'Haru',
  barks: true,
  wags: true
}
console.log(dog)

// 両方書いて良い。どちらかだけでも良い。
let newCat: CatOrDogBoth = {
  name: 'Tama',
  purrs: true
}
console.log(newCat)

// 両方書いて良い。どちらかだけでも良い。
let newDog: CatOrDogBoth = {
  name: 'Pochi',
  barks: true,
  wags: true
}
console.log(newDog)

// 両方書いて良い。
let kimera01: CatOrDogBoth = {
  name: 'huum',
  purrs: true,
  barks: true,
  wags: true
}
console.log(kimera01)

// ただしどちらにもなれないのはダメ。
// let newHoge: CatOrDogBoth = {
//   name:'hoge'
// }

// 両方書かないとだめ。
let kimera02: CatAndDog = {
  name: 'catanddog',
  purrs: true,
  barks: true,
  wags: true
}
console.log(kimera02)
