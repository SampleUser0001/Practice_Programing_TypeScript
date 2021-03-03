
interface Food {
  calories: number
  tasty: boolean
}

interface Sushi extends Food {
  salty: boolean
}

interface Cake extends Food {
  sweet: boolean
}

// 交差型を使っても同じことができる。
type FoodType = {
  calories: number
  tasty: boolean
}

type SushiType = FoodType & {
  salty: boolean
}

type CakeTYpe = FoodType & {
  sweet: boolean
}

// 宣言のマージ
interface Hoge {
  hoge: string
}
interface Hoge {
  hogehoge: string
}
// Hogeインターフェースはhogeとhogehogeをメンバに持つ。
let hogeInstance: Hoge = {
  hoge: "hoge",
  hogehoge: "hogehoge",
}

