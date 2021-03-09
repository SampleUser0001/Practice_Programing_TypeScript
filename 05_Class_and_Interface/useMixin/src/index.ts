
/**
 * コンストラクタ
 * このTはgetDebugValueのためのもの。
 */
type ClassConstructor<T> = new (...args: any[]) => T

/**
 * Cは、少なくとも、コンストラクタと、getDebugValue関数を持っている。
 * @param Class ジェネリック型によって、必ずClassConstructor = コンストラクタ
 */
function withEZDebug<C extends ClassConstructor<{
  getDebugValue():object
}>>(Class: C) {
  /**
   * ClassConstructorの子を返す。
   * ここではClassConstructorの匿名クラスのインスタンス。
   */
  return class extends Class {
    constructor(...args: any[]) {
      // 親クラスのコンストラクタを呼ぶ。
      super(...args)
    }
    debug(){
      let value = this.getDebugValue()
      // これによってクラス名が取得できたりできなかったりする。
      // Object.setPrototypeOf(this, this)
      // バージョンによって、親クラスの名前が取得できたり、自分のクラスの名前が取得できたりする。
      // 匿名クラスを返す実装なので、それを見ているっぽい。
      let className = this.constructor.name
      return className + '(' + JSON.stringify(value) + ')';
    }
  }
}

// 実際に使ってみる
class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}
  getDebugValue(){
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName
    }
  }
}

// withEZDebugを呼ぶ。…つまりコンストラクタ。
let User = withEZDebug(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
console.log(user.debug())
