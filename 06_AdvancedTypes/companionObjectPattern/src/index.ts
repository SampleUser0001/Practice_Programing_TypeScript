type Unit = 'EUR' | 'GBP' | 'JPN' | 'USD'

// Currencyを型として宣言
type Currency = {
  unit: Unit
  value: number
}
// Currencyを値として宣言
let Currency = {
  from(value:number, unit:Unit): Currency {
    return {
      unit:unit,
      value
    }
  }
}
