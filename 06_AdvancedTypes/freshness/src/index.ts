type Options = {
  baseURL: string
  cacheSize?: number
  tier?: 'prod' | 'dev'
}

class API {
  constructor(private options: Options) {}
}

new API({
  baseURL: 'http://localhost',
  tier: 'prod'
})

// これはエラー。
// new API({
//   baseURL: 'http://localhost',
//   tierr: 'prod'
// })

// これはOK。
new API({
  baseURL: 'http://localhost',
  tierr: 'prod'
} as Options)

// これもOK。
let badOptions = {
  baseURL: 'http://localhost',
  tierr: 'prod'
}
new API(badOptions)
