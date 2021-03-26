type DummyEntity = {
    name: string
}

function validateEntity(e?: DummyEntity){
  // ...
}

function processEntity(e?: DummyEntity) {
  validateEntity(e)

  // こっちはエラー。null, undefinedの可能性があるため、直接参照できない。
  // let a = e.name

  // これが非nullアサーション。
  let b = e!.name
}

let value: DummyEntity = {
  name: 'hoge'
}
processEntity(value)
