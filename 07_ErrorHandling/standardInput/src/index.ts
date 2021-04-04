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

// メイン処理
(async function main() {
  const name = await readUserInput('What is your name? ');
  console.log(`Hello, ${name}!`);
})();
