type UserTextEvent = {value: string}
type UserMouseEvent = {value: [number, number]}

type UserEvent = UserTextEvent | UserMouseEvent

function handle(event: UserEvent){
  if (typeof event.value === 'string') {
    event.value
    return 
  }
  return event.value // stringではないので[number,number]を返す。
}