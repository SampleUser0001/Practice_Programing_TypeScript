
class SuperClass {
  method(){
    return "SuperClass"
  }
}

class SubClass extends SuperClass {
  constructor(){
    super()
  }
  method(){
    return "override by SubClass"
  }
  method2(){
    return "SubClass"
  }
  methodSuper(){
    return super.method()
  }
}

const subClassInstance = new SubClass()
console.log(subClassInstance.method())
console.log(subClassInstance.method2())
console.log(subClassInstance.methodSuper())
