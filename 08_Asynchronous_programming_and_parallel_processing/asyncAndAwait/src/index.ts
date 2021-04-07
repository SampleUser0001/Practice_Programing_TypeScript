// awaitとasyncを使って実装し直す。
// function getUser() {
//   getUserID(18)
//   .then(user => getLocation(user))
//   .then(location => console.info('got location', location))
//   .catch(error => console.error(error))
//   .finally(() => console.info('done getting location'))
// }

async function getUser(){
  try {
    let user = await getUserID(18);
    let location = await getLocation(user)
    console.info('got location', user)
  } catch(error) {
    console.error(error)
  } finally {
    console.info('done getting location')
  }
}

// 以下ダミー
function getUserID(id: number){
  return {id: id}
}
function getLocation(user: User){
  return {user: user}
}
type User = {
  id: number,
  name?: string
}
type Location = {
  user: User 
  location?: string
}