
const hoge = [1,2]
console.log('hoge:',hoge)

const hogehoge = [...hoge, ...hoge]
console.log('hogehoge:',hogehoge)

const piyo = {
  piyo_a:{
    piyo_b:1
  }
}
console.log('piyo:', piyo)

const piyo_2 = {...piyo}
console.log('piyo_2', piyo_2)

piyo.piyo_a.piyo_b = 2
console.log('piyo_2', piyo_2)
