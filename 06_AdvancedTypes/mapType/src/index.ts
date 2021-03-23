type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

let nextDay: {[K in Weekday]: Day} = {
  Mon: 'Tue',
  Tue: 'Wed',
  Wed: 'Thu',
  Thu: 'Fri',
  Fri: 'Sat'
}

type Account = {
  id: number
  isEmployee: boolean
  notes: string[]
}
// すべての項目を省略可能にする
type OptionalAccount = {
  [K in keyof Account]?: Account[K]
}
// すべてのフィールドを null許容にする。
type NullableAccount = {
  [K in keyof Account]: Account[K] | null
}
// すべてのフィールドを読み取り専用にする。
type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K]
}
// すべての項目を書き込み可能に再設定する。
type Account2 = {
  -readonly [K in keyof ReadonlyAccount]: Account[K]
}
// すべての項目を必須に再設定する。
type Account3 = {
  [K in keyof OptionalAccount]-?: Account[K]
}