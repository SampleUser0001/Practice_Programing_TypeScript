import * as fs from 'fs'

function appendAndReadPromise(path: string): Promise<string, Error> {
  return new Promise<string, Error>((resolve, reject) => {
    fs.readFile(path, {encoding: 'utf8'}, (error, result) => {
      if(error){
        reject(error)
      }else{
        resolve(result)
      }
    })
  })
}

type Executor<T> = (
  resolve: (result: T) => void,  // 正常系 : 引数の型はresultと同じになる。
  reject: (error: unknown) => void    // 異常系 : 引数の型はerrorと同じになる。JavaScriptはなんでもthrowできる。
) => void
class Promise<T> {
  constructor(f: Executor<T>) {}
  then<U>(g: (result: T) => Promise<U> | U): Promise<U> {
    // エラー回避用。こんな実装をしてはいけない。
    return new Promise<U>(()=>null)
  }
  catch<U>(g: (error: unknown) => Promise<U> | U): Promise<U> {
    // エラー回避用。こんな実装をしてはいけない。
    return new Promise<U>(()=>null)
  }
}

// ダメな例。
// function appendAndRead(
//   path: string,
//   data: string,
//   cb: (error: Error | null, result: string | null) => void
// ) {
//   fs.appendFile(path, data, error => {
//     if(error){
//       return cb(error, null)
//     }
//     fs.readFile(path, { encoding: 'utf8'}, (error, result) => {
//       if(error){
//         return cb(error, null)
//       }
//       cb(null, result)
//     })
//   })
// }

