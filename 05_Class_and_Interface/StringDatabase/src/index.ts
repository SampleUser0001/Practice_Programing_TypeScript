type State = {
  [key: string]: string
}

// state, get, setを持っているinterface StringDatabaseと
// new(), form(State)を持っている、StringDatabaseのコンストラクター型が作られる。
class StringDatabase {
  state: State = {}
  get(key: string): string | null {
    return key in this.state ? this.state[key] : null
  }
  set(key: string, value: string) {
    this.state[key] = value
  }
  static from(state: State){
    let db = new StringDatabase
    for (let key in state) {
      db.set(key, state[key])
    }
    return db
  }
}
