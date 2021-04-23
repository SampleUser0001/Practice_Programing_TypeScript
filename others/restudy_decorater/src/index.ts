
// function color(value: string) { // this is the decorator factory
//     return function (target) { // ここがデコレータ
//         // ここでtargetやvalueを使って色々やる
//         console.log(target)
//     }
// }

function f() {
    console.log("f(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}
