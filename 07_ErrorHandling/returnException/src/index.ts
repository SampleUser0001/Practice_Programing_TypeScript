
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

/** 値が日付フォーマットではない */
class InvalidDateFormatError extends RangeError {}
/** 未来日が入力された */
class DateIsInTheFutureError extends RangeError {}

/**
 * 入力された誕生日:stringをDateに変換する。
 * 入力された値がnullの場合はnullを返す。
 * @param birthday 誕生日:string
 * @returns 誕生日:Date
 * @throws {InvalidDateFormatError} 値が日付フォーマットではない
 * @throws {DateIsInTheFutureError} 未来日が入力された
 */
function parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
  let date =  new Date(birthday)
  if (!isValid(date)) {
    throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
  } else if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError('Are you a timelord?')
  } else {
    return date
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

// メイン処理
(async function main() {
  try {
    const birthday = await readUserInput('When is youre birthday? ');
    let result = parse(`${birthday}`)
    if(result instanceof Error){
      console.error(result.message)
    } else {
      console.info('Date is', result.toISOString());
    }

  }
})();



