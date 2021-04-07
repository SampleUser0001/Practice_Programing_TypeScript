// function readFile(
//   path: string,
//   options: {encoding: string, flag?: string},
//   callback: (err: Error | null, data: string | null) => void
// ): void

import * as fs from 'fs'

// 本来はこのファイルだが、権限の都合で、別のパスにコピーしたファイルを読み込む。
// const LOG_FILE_PATH = '/var/log/apache2/access.log'
const LOG_FILE_PATH = '/tmp/typescript_test/access.log'

fs.readFile(
  LOG_FILE_PATH,
  { encoding: 'utf8'},
  (error, data) => {
    if(error){
      console.error('error reading!\n', error)
      return 
    }
    console.info('success reading!\n', data)
  }
)

fs.appendFile(
  LOG_FILE_PATH,
  'New Access Log Entry!',
  error => {
    if(error){
      console.error('error writing!\n', error)
    }
  }
)