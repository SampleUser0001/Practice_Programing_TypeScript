import { Z_FILTERED } from "zlib"

type Filter = {
  <T>(array: T[], f:(item: T) => boolean): T[]
}

let filter: Filter = (array, f) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

console.log(filter([1,2,3,4] , _ => _ < 3))
console.log(filter(['a','b','c'] , _ => _ !== 'b'))

let names = [
  {firstName: 'beth'},
  {firstName: 'caitlyn'},
  {firstName: 'xin'},
  {firstName: 'beleth'}  
]
console.log(filter(names, _ => _.firstName.startsWith('b')))


// map
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = []
  for (let i = 0; i < array.length; i++){
    result[i] = f(array[i])
  }
  return result
}

