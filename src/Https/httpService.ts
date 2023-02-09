import axios, {AxiosResponse} from 'axios';
import appApi, {HttpObject} from './api';
import {from, Observable, throwError, TimeoutError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {CheckConnectData, CheckHttp, ResponseSuccess} from '../Interface';

/**
 * http请求封装
 * 单例模式
 */

const httpAddress: string = 'http://192.168.2.138:31010';
export default class myHttpMethod {
  private httpBody;
  private static instance: myHttpMethod;

  private constructor() {
    const api = new appApi();
    this.httpBody = api.api<any>();
  }

  /**
   * 实例化方法
   */
  static getInstance(): myHttpMethod {
    if (!this.instance) {
      this.instance = new myHttpMethod();
    }
    return this.instance;
  }

  /**
   * 错误信息处理函数_数据来源层
   *
   * @param errorResponse 错误信息
   */
  private handleErrorResponse(err: any) {
    console.log(111);
  }
  /**
   * 构建请求网址
   */
  private nsURL(url: string): string {
    return httpAddress + '/' + url;
  }

  /**
   post请求，注册请求体
   url：请求url
   ResponseBody:自定义pojo类
   */
  private post<T>(api: HttpObject<T>): Observable<AxiosResponse<any, any>> {
    const url = this.nsURL(api.url);
    console.log(url);
    return from(
      axios({
        method: 'POST',
        url: url,
        params: api.body,
      }),
    );
  }

  /**
   * 搜索api并返回
   */
  private getApi<T>(apiId: string): HttpObject<T> {
    const params = this.httpBody.filter(item => {
      if (item.id === apiId) {
        return item;
      }
    });
    params[0].body = {};
    return params[0];
  }

  //通用的post返回值出理方案
  private buildPostData<T>(postData: AxiosResponse<ResponseSuccess>) {
    if (postData.data) {
      return postData.data.data as T;
    }
  }

  // *****************业务通讯**********************
  // 01 测试链接
  checkConnect(): Observable<CheckConnectData> {
    const api = this.getApi<CheckHttp>('checkHttp');
    api.body.params = [];
    return this.post<CheckHttp>(api).pipe(
      map((postData: AxiosResponse<ResponseSuccess>) =>
        this.buildPostData<CheckConnectData>(postData),
      ),
    ) as Observable<CheckConnectData>;
  }
}
