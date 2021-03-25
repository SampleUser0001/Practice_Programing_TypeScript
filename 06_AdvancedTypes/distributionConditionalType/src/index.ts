type toArray2<T> = T extends unknown ? T[] : T[]
type A = toArray2<number>          // number[]
type B = toArray2<number | string> // number[] | string[] ((number|string)[]ではない。)

type Without<T,U>  = T extends U ? never : T

type C = Without<
  boolean | number | string,
  boolean
>
