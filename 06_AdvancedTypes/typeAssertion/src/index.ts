function formatInput(input: string){
  // ...何らかの処理
  console.log(typeof input)
}

function getUserInput(): string | number {
  // ...何らかの処理
  //  return 'hoge'
  
  // ちなみにこれも一応通る。(渡される側もnumberで処理される。)
  return 1
}

let input = getUserInput()

// inputがstringであると言うことにしておく。
// 実際にはnumberの可能性もあるが、assertionで回避。
formatInput(input as string)

// これと同じだが、他の構文とぶつかる可能性があるので、asを使用したほうがいい。
formatInput(<string>input)