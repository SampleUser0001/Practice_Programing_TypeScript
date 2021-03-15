import { timeStamp } from "node:console";

type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now()
  }
}

function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivate = false

    activate() {
      this.isActivate = true
    }

    deactivate() {
      this.isActivate = false
    }
  }
}

// TimestampedとActivateを両方継承したクラスを作成する。
class User {
  name = ''
}

const TimestamperUser = Timestamped(User)
const timestamedUserExample = new TimestamperUser();
console.log(timestamedUserExample)


const TimestanperActivateUser = Timestamped(Activatable(User))
const timestampedActivateableUserExample = new TimestanperActivateUser()
console.log(timestampedActivateableUserExample)