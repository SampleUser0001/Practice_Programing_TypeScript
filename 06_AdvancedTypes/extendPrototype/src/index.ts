import './zip'

console.log(
  [1,2,3]
    .map(n => n*2)
    .zip(['a','b','c'])
)
// [ [ 2, 'a' ], [ 4, 'b' ], [ 6, 'c' ] ]