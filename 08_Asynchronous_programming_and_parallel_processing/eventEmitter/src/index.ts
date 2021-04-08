import TypedEvent from './TypedEvent';

type Foo = {
  id: number
}

type Bar = {
  name: string
}

const onFoo = new TypedEvent<Foo>();
const onBar = new TypedEvent<Bar>();

let foo = {id:0}
let bar = {name:'hoge'}

// Emit: 
onFoo.emit(foo);
onBar.emit(bar);

// Listen: 
onFoo.on((foo)=>console.log(foo));
onBar.on((bar)=>console.log(bar));


