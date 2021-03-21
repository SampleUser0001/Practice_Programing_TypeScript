type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: number
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}

// APIを呼んで、結果を取得した…という体。
function getAPIResponse(): APIResponse{
  return {
    user: {
      userId: '001',
      friendList: {
        count: 0,
        friends: [{
          firstName: 'undefined',
          lastName: 'null'
        },{
          firstName: 'Who are you!?',
          lastName: 'I don\'t know!'
        }]
      }
    }
  }
}

type ResponseKeys = keyof APIResponse
type UserKeys = keyof APIResponse['user']
type FriendListKeys = keyof APIResponse['user']['friendList']

