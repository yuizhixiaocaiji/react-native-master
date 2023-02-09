export default class AppApi {
  private readonly defaultApi = 'YouHao/Api/';

  constructor() {}

  api<T>(): Array<HttpObject<T>> {
    return [
      new HttpObject(
        'checkHttp',
        '检测网络',
        {} as T,
        `${this.defaultApi}Sys/Ping`,
      ),
    ];
  }
}

export class HttpObject<T> {
  constructor(
    public id: string,
    public des: string,
    public body: T,
    public url: string,
  ) {}
}
