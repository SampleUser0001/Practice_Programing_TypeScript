// onmessage = e => {
//   console.log(e.data)
//   postMessage(`Act: "${e.data}"`)
// }

type Command = 
  | {type: 'sendMessageToThread', data: [ThreadID, Message]}
  | {type: 'craeteThread', data: [Participants]}
  | {type: 'addUserToThread', data: [ThreadID, UserID]}
  | {type: 'removeUserFromThread', data: [ThreadID, UserID]}

onmessage = e => 
  processCommandFromMainThread(e.data)

function processCommandFromMainThread(command: Command) {
  switch (command.type) {
    case 'sendMessageToThread':
      let [threadID, message] = command.data
      console.log(message)
  }
}
