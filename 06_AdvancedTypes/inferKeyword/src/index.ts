type ElementType<T> = T extends unknown[] ? T[number] : T
type A = ElementType<number[]> // number

// 上の分と同じ評価
type ElementType2<T> = T extends (infer U)[] ? U : T
type B = ElementType2<number[]> // number