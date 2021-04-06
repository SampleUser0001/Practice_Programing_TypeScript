setTimeout(() => console.info('a'),1)
setTimeout(() => console.info('b'),2)
console.info('c')
// c a bの順に出力される。