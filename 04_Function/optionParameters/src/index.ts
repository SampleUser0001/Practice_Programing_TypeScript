function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'Not signed in.')
}

log('hoge')
log('piyo','da763be')

