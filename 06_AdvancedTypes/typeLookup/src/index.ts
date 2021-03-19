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

type FriendList = APIResponse['user']['friendList']

// getAPIResponseの結果のうち、friendListを表示する。
function renderFriendList(firendList: FriendList){
  console.log(firendList)
}

let response = getAPIResponse()
renderFriendList(response.user.friendList)

type Friend = FriendList['friends'][number]
let friend_00 = getAPIResponse().user.friendList.friends[0]
let friend_01 = getAPIResponse().user.friendList.friends[1]
console.log(friend_00)
console.log(friend_01)

