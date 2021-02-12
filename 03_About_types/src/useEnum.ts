
// 値は持たせても持たせなくても宣言できる。
enum Language {
  Japanese = 0,
  English = 1,
  Spanish = 2,
  Russian // ここは3になる。
}

const myFIrstLanguage = Language.Japanese
let mySecondLanguage = Language['English']

console.log(Language.Russian)

// 分割して書くことができる。
enum ProgramingLanguage {
  TypeScript = 0,
  JavaScript = 1
}
enum ProgramingLanguage {
  Java = 2
}
