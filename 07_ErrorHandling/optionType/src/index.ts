// ユーザからのキーボード入力を取得する Promise を生成する
function readUserInput(question :string) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    readline.question(question, (answer :string) => {
      resolve(answer);
      readline.close();
    });
  });
}

/**
 * 入力された誕生日:stringをDateに変換する。
 * 入力された値がnullの場合はnullを返す。
 * @param birthday 誕生日:string
 * @returns 誕生日:Date
 * @throws {InvalidDateFormatError} 値が日付フォーマットではない
 * @throws {DateIsInTheFutureError} 未来日が入力された
 */
function parse(birthday: string): Date[] {
  let date =  new Date(birthday)
  if (!isValid(date)) {
    return []
  } else if (date.getTime() > Date.now()) {
    return []
  } else {
    return [date]
  }
}

/**
 * 入力値が有効な日付かチェックする。
 * @param date 
 * @returns 
 */
function isValid(date: Date) {
  return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime())
}

function ask(result: string | null) {
  if(result === null){
    return []
  }
  return [result]
}

/**
 * 二重配列を展開する。
 * @param array 配列の配列
 * @returns 
 */
function flatten<T>(array: T[][]): T[] {
  return Array.prototype.concat.apply([], array)
}

interface Option<T> {
  flatMap<U>(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Option<U>): Option<U>
  getOrElse(value: T): T
}

class Some<T> implements Option<T> {
  constructor(private value: T) {}
  flatMap<U>(f: (value: T) => None): None 
  flatMap<U>(f: (value: T) => Some<U>): Some<U> 
  flatMap<U>(f: (value: T) => Option<U>): Option<U> {
    return f(this.value)
  }
  getOrElse(): T {
    return this.value
  }
}
class None implements Option<never> {
  flatMap(): None {
    return this
  }
  getOrElse<U>(value: U): U {
    return value
  }
}

function Option<T>(value: null | undefined): None
function Option<T>(value: T): Some<T>
function Option<T>(value: T): Option<T> {
  if(value == null){
    return new None
  }
  return new Some(value)
}

// メイン処理
(async function main() {
  const birthday = await readUserInput('When is youre birthday? ')

  // ask(`${birthday}`)
  //   .map(parse)
  //   .map(date => date.toISOString())
  //   .forEach(date => console.info('Date is', date))

  // flatten(ask(`${birthday}`))
  //   .map(parse)
  //   .map(date => date.toISOString())
  //   .forEach(date => console.info('Date is ', date))

  ask(`${birthday}`)
    .flatMap(parse)
    .flatMap(date => new Some(date.toISOString()))
    .flatMap(date => new Some('Date is ' + date))
    .getOrElse('Error parsing date for some reason.')
})();

