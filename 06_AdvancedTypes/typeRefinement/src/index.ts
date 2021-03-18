type Unit = 'cm' | 'px' | '%'

let units: Unit[] = ['cm', 'px', '%']

function parseUnit(value: string): Unit | null {
  for(let i=0; i<units.length; i++){
    if(value.endsWith(units[i])){
      return units[i]
    }
  }
  return null
}

console.log(parseUnit('cm'))
console.log(parseUnit('pt'))
console.log('----')

type Width = {
  unit: Unit
  value: number
}

function parseWidth(width: number | string | null | undefined): Width | null {
  // nullとundefinedの両方のチェックができる。
  if(width == null){
    return null
  }

  if(typeof width === 'number'){
    return {unit: 'px', value: width}
  }

  let unit = parseUnit(width)
  // null, undefined, NaN, 0, -0, "", falseはfalseと判定される。
  // それ以外はtrueと判定される。
  if(unit){
    // valueはNaNが代入される。
    return {unit, value: parseFloat(width)}
  }

  return null
}

console.log(parseWidth(100))
console.log(parseWidth('cm'))
console.log(parseWidth(null))
console.log(parseWidth('hoge'))
