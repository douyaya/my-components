import request from 'umi-request';
// todo 没有做统一的错误处理

export async function get<T>(
  path: string,
  params: Record<string, any> = {},
  // args: RequestInit = {
  //   method: 'get',
  //   credentials: 'include',
  // },
): Promise<T> {
  return request.get<any>(path, { params });
}
export async function post<T>(
  path: string,
  params: Record<string, any> = {},
  // headers?: object,
): Promise<T> {
  return request.post<any>(path, { data: params });
}
export async function del<T>(
  path: string,
  params: Record<string, any> = {},
  // args: RequestInit = {
  //   method: 'delete',
  //   credentials: 'include',
  // },
): Promise<T> {
  return request.delete<any>(path, { params });
}

export async function put<T>(
  path: string,
  params: Record<string, any> = {},
  // headers?: object,
): Promise<T> {
  return request.put<any>(path, { params });
}

export async function patch<T>(
  path: string,
  params: Record<string, any> = {},
  // headers?: object,
): Promise<T> {
  return request.patch<any>(path, { params });
}
