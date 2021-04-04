
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
 */
function parse(birthday: string): Date | null {
  let date =  new Date(birthday)
  if (!isValid(date)) {
    return null
  }
  return date
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
  const birthday = await readUserInput('When is youre birthday? ');
  let date = parse(`${birthday}`)

  if(date){
    console.info('Date is', date.toISOString());
  } else {
    console.error('Error parsing date for some reason')
  }

})();



