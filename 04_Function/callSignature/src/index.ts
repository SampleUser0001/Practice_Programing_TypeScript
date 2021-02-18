type Log = (message: string, userId?: string) => void

let log: Log = (
  message, userId = 'Not singed in'
) => {
  let time = new Date().toISOString()
  console.log(time, message, userId)
}

log('hogehoge')
log('hogehoge','0123abc')
