const USER_ID = 'da763be'

function log(message: string, userId = 'Not signed in.') {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId)
}
log('hoge')
log('piyo',USER_ID)

type Context = {
  appId?: string
  userId?: string
}
function log2(message:string, context: Context = {}){
  let time = new Date().toISOString()
  console.log(time, message, context.userId)
}

log2('hoge')
log2('piyo',{userId: USER_ID})
log2('fuga',{appId: 'appid'})
