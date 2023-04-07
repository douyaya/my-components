// export async function addAggregationApi(params: {
//   aone_name: string;
//   confighub_group: string;
//   branch_head: string;
//   router: any;
// }) {
//   return await post<Response<ResultList<any>>>(`${prefix}/ops/confighub/router/add`, params);
// }
import * as resInterface from './reuest';

export interface Response<T> {
  data: T;
  success: boolean;
  error?: string;
}
export interface ResultList<T> {
  list: T[];
  total: number;
}
export type ReqMethod = 'get' | 'del' | 'post' | 'put' | 'patch';

export function requestFormat(api: string, method: ReqMethod) {
  // todo 判断下是不是对象
  return async function (params: any) {
    const queryString = objectToQueryString(params);
    const apiString = method === 'post' ? api : `${api}?${queryString}`;
    return await resInterface[method]<Response<ResultList<any>>>(
      apiString,
      method === 'post' ? params : {},
    );
  };
}

export function objectToQueryString(obj: Record<string, any>) {
  const qs = new URLSearchParams();
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    if (value === undefined) {
      continue;
    }
    qs.set(key, Array.isArray(value) ? value.join() : value);
  }
  return qs.toString();
}
