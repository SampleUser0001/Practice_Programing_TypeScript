
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

// 両方…？いや、やっぱり猫。
let newCat: CatOrDogBoth = {
  name: 'Tama',
  purrs: true,
  barks: false,
  wags: true
}
console.log(newCat)
