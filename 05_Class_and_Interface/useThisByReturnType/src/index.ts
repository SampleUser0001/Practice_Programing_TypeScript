
let set = new Set()
set.add(1).add(2).add(3).add("hoge")
console.log(set.has(2))
console.log(set.has(4))
console.log(set.has("hoge"))
console.log(set.has("piyo"))