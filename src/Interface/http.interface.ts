/**
 * 响应数据接口-错误请求
 * */
export interface ResponseError {
  error: string; //错误描述
  headers: any; //错误头
  status: number; //状态码
  url: string; //错误的请求地址
  code: string; //错误描述
}

export type ErrorType = 'code' | 'error';

/**
 * 响应数据接口-成功请求
 * */
export type ResponseSuccess = Omit<ResponseError, ErrorType> & {data: string};

export interface CheckConnectData {
  branchId: string;
  branchName: string;
}
