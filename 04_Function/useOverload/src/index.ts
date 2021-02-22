import { totalmem } from "os"

type Reservation
  = {from:Date, to:Date, destination:string, result: boolean}
  | {from:Date, destination:string, result: boolean}
  | {result: boolean}

// 予約処理を行う関数を作る
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if(toOrDestination instanceof Date && destination !== undefined) {
    // 引数3つ
    // 第2引数がDateで、第3引数がundefinedでない。
    return {
      from: from,
      to: toOrDestination,
      destination: destination,
      result: true
    }
  } else if(typeof toOrDestination === 'string' ) {
    // 引数2つ扱い
    // 第2引数がstring = destinationとして扱う。instanceofはstringには使えない。（object Stringには使える。）
    // 型チェックしないとReservationに代入できない。
    return {
      from: from,
      destination: toOrDestination,
      result: true
    }
  } else {
    // エラーチェック。
    // 発生しないはずだが…書いておかないと、コンパイルが通らない。
    return { result: false }
  }
}

function printType(x:any) {
  console.log(`${typeof(x)} ${Object.prototype.toString.call(x)}`)
}

const today = new Date()
const tomorrow = new Date(today.setDate(today.getDate()+1))
const nextMonth = new Date(today.setMonth(today.getMonth()+1))

console.log(reserve(tomorrow, nextMonth, 'どこか'))
console.log(reserve(tomorrow, 'どこか'))

