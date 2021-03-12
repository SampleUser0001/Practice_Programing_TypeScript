
class RequestBuilder {
  private url: string | null = null
  private method: 'get' | 'post' | null = null
  private data: object | null = null

  constructor(){}

  setURL(url: string): this {
    this.url = url
    return this
  }
  setData(data: object): this {
    this.data = data
    return this
  }
  setMethod(method: 'get' | 'post'):this {
    this.method = method
    return this
  }
  send(){
    //
  }
}

// こんな感じのやつ
new RequestBuilder()
  .setURL('/users')
  .setMethod('get')
  .setData({firstname: 'Anna'})
  .send()
