
type Age = number

type UseAliasPerson = {
  name: string
  age: Age
}

let person: UseAliasPerson = {
  name : 'hoge',
  age : 55
}
console.log('name',person.name)
console.log('age',person.age)