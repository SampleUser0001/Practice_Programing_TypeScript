class MessageQueue {
  // 継承できないようにconstructorをprivarteにしておく。
  // 継承しようとしても親クラスのconstructorが呼べないので継承できない。
  private constructor(private messages:string[]){}

  // constructorが呼べないとインスタンスが生成できないので、createメソッドを作成する。
  static create(messages:string[]){
    return new MessageQueue(messages)
  }
}
